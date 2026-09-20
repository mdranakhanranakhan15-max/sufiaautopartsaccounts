import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

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

        // STRICT try-catch: the database connection, the user lookup and the password
        // comparison ALL live inside this boundary. Every failure must be converted
        // into an explicit rejection — an escaped throw, or an await that never
        // settled, is what left the login form spinning forever on Vercel.
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
            throw new Error('No user found for the supplied email');
          }

          if (!user.isActive) {
            throw new Error('User account is deactivated');
          }

          // bcryptjs (pure JavaScript) is the ONLY hashing library allowed here: the
          // native "bcrypt" package blocks the serverless event loop and hangs the
          // whole invocation instead of returning an error.
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new Error('Password does not match');
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          // Log the real cause for the Vercel function logs, but ALWAYS hand the client
          // an explicit rejection so the sign-in request terminates instead of hanging.
          console.error('[auth] authorize() failed:', error);

          throw new Error('Database or Auth Error');
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

