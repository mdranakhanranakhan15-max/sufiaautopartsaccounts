import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Only admin can access /users
    if (pathname.startsWith('/users') && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/login',
    },
  }
);

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/pos/:path*',
    '/products/:path*',
    '/categories/:path*',
    '/users/:path*',
    '/invoices/:path*',
  ],
};

