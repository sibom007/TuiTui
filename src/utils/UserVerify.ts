export function isUserLoggedIn(req: any) {
  const token = req.cookies.get("next-auth.session-token");

  return token ? true : false;
}
