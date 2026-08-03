import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const host = request.headers.get("host") || "nanditasantra.vercel.app";
  const protocol = host.includes("localhost") ? "http" : "https";

  const clientId = process.env.OAUTH_CLIENT_ID || process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: "OAUTH_CLIENT_ID environment variable is missing" },
      { status: 500 }
    );
  }

  const redirectUri = `${protocol}://${host}/api/callback`;
  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");

  githubAuthUrl.searchParams.set("client_id", clientId);
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
  githubAuthUrl.searchParams.set("scope", "repo,user");

  return NextResponse.redirect(githubAuthUrl.toString());
}
