import { withAuth } from 'next-auth/middleware';

// Standard NextAuth middleware.
//
// `export { default } from 'next-auth/middleware'` IS this same handler
// (the package default export is literally `withAuth`), but written explicitly
// here because the options below are what fix the production redirect loop:
//
// 1. `secret` — next-auth/next/middleware.js resolves it as
//    `options.secret ?? NEXTAUTH_SECRET ?? AUTH_SECRET` and when it is missing it
//    takes its NO_SECRET branch: a 307 to /api/auth/error?error=Configuration
//    instead of ever reading the session cookie. Because lib/auth.js signs the
//    JWT with its own hardcoded fallback, the middleware silently disagreed with
//    the route that created the cookie -> /dashboard bounced straight back to
//    /login on Vercel. Passing the SAME fallback here guarantees both sides derive
//    an identical key, and a real NEXTAUTH_SECRET in Vercel still takes priority.
//
// 2. `pages.signIn` — keeps unauthenticated users on the app's styled /login page
//    (the bare default redirects them to the unstyled /api/auth/signin page).
export default withAuth({
  secret:
    process.env.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    'sufia_auto_pos_super_secret_key_2026_jwt',
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Every matched route requires a valid, decodable session cookie.
    // The cookie name is intentionally left to next-auth's defaults, which already
    // match what the server sets: "__Secure-next-auth.session-token" when
    // NEXTAUTH_URL is https (or on Vercel), else "next-auth.session-token".
    // Do not hardcode a name here — a mismatch would recreate this bug.
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/invoices/:path*',
    '/pos/:path*',
    '/products/:path*',
    '/categories/:path*',
    '/inventory/:path*',
  ],
};

