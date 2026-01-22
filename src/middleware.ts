import { AUTH_ROUTE, PRIVATE_ROUTE, ROUTER_PATH } from '@/constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentToken = request.cookies.get('access_token');

  if (PRIVATE_ROUTE.includes(request.nextUrl.pathname) && !currentToken) {
    request.cookies.delete('access_token');
    const response = NextResponse.redirect(new URL(ROUTER_PATH.LOGIN, request.url));
    response.cookies.delete('access_token');
    return response;
  }

  if (AUTH_ROUTE.includes(request.nextUrl.pathname) && currentToken) {
    return NextResponse.redirect(new URL(ROUTER_PATH.YOUTUBE_ACCOUNT, request.url));
  }

  // if (request.nextUrl.pathname === ROUTER_PATH.DASHBOARD) {
  //   return NextResponse.redirect(new URL(ROUTER_PATH.YOUTUBE_ACCOUNT, request.url));
  // }
}
