import { NextResponse } from 'next/server';
import { verifyToken } from './lib/jwtutils';

export default async function middleware(req) {
  const { nextUrl, cookies } = req;
  const token = cookies.get('token')?.value; // Use this to access the token
  const loginUrl = new URL('/login', nextUrl.origin);
  const registerUrl = new URL('/register', nextUrl.origin);
  const dashboardUrl = new URL('/dashboard', nextUrl.origin);


  if (
    nextUrl.pathname.startsWith('/_next/') ||
    nextUrl.pathname.startsWith('/static/') ||
    nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  if ((nextUrl.pathname === '/login' || nextUrl.pathname === '/register') && token) {
    try {
      const validToken = await verifyToken(token); // Await the token verification
      if (validToken) {
        return NextResponse.redirect(dashboardUrl);
      }
    } catch (error) {
      console.error('Invalid token', error);
    }
  }

  if (!token || !await verifyToken(token)) { // Await the token verification
    if (nextUrl.pathname !== '/login' && nextUrl.pathname !== '/register') {
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
