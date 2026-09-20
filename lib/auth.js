import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

/**
 * Marker error for expected credential failures.
 * Keeping these separate means the login form can still show a friendly, specific
 * hint, while every unexpected failure is reported with the generic error below.
 */
class CredentialsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CredentialsError';
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'admin@sufiaauto.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter both email and password.');
        }

        const email = String(credentials.email).toLowerCase().trim();
        const password = String(credentials.password);

        // STRICT BOUNDARY: every failure below (Mongo URI missing, DB unreachable,
        // connection/query timeout, schema error, bcrypt failure) MUST reject here.
        // If it escaped — or worse, if an await never settled — NextAuth would never
        // answer the POST and the login form would spin forever with no error shown.
        try {
          await connectToDatabase();

          // Seed initial admin if no users exist in database
          const userCount = await User.countDocuments();
          if (userCount === 0) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await User.create({
              name: 'System Admin',
              email: 'admin@sufiaauto.com',
              password: hashedPassword,
              role: 'admin',
              isActive: true,
            });
          }

          const user = await User.findOne({ email });
          if (!user) {
            throw new CredentialsError('Invalid email or password.');
          }

          if (!user.isActive) {
            throw new CredentialsError('Your account is deactivated. Please contact an administrator.');
          }

          // bcryptjs is required here: the native "bcrypt" package cannot run on
          // serverless/edge runtimes and its pending operation hangs the request.
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new CredentialsError('Invalid email or password.');
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          // Expected credential failures keep their specific, user-safe message.
          if (error instanceof CredentialsError) {
            throw error;
          }

          // Anything else is a real infrastructure/verification failure: log the
          // detail server-side and reject the client with an explicit error so the
          // sign-in request always terminates instead of hanging.
          console.error('[auth] authorize() failed:', error);

          throw new Error('Invalid credentials or database error');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || 'sufia_auto_pos_super_secret_key_2026_jwt',
};

