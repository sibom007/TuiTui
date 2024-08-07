import {
  apiAuthPrefix,
  authRoutes,
  DEFULT_REDIRECT_URL,
  publicRoutes,
} from "@/Routes/routes";

import { NextResponse, type NextRequest } from "next/server";
import { isUserLoggedIn } from "./utils/UserVerify";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const isLoggedIn = await isUserLoggedIn(req);
  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isApiRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFULT_REDIRECT_URL, nextUrl));
    }
    return null;
  }
  if (!isLoggedIn && !isPublicRoutes) {
    return NextResponse.redirect(new URL("/authorization", nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
