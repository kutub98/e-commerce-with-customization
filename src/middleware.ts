import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.next();

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const json = await response.json();
  if (json.userId === 2) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(
      new URL(`/login?ref=${request?.nextUrl?.pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: '/customize',
};
