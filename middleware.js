import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
