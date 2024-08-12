import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
      const loginUrl = new URL('/login', req.url);

      // Create a response to redirect to the login page
      const response = NextResponse.redirect(loginUrl);

      // Clear the token cookie
      response.cookies.set('token', '', {
          httpOnly: true,
          path: '/',
          maxAge: 0,
      });

      return response;
  } catch (error) {
      console.error('Error during logout:', error);
      return NextResponse.error();
  }
}