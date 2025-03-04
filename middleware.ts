import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add any necessary middleware logic here
  // For now, we'll just pass through all requests
  return NextResponse.next()
}

export const config = {
  matcher: "/services/:path*",
}

