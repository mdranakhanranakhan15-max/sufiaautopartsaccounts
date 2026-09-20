import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// Pin this route to the Node.js runtime.
// The credentials provider opens TCP sockets via mongoose and hashes with
// bcryptjs, neither of which is available on the Edge runtime — on Edge the
// request hangs instead of failing, which is what froze the login form.
export const runtime = 'nodejs';

// Never statically optimize an auth handler: it must run per request.
export const dynamic = 'force-dynamic';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

