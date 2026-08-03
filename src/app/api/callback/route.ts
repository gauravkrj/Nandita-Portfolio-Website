import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const clientId = process.env.OAUTH_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return new NextResponse("Missing authorization parameters", { status: 400 });
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error || !data.access_token) {
      return new NextResponse(`GitHub OAuth Error: ${data.error_description || data.error}`, { status: 400 });
    }

    const token = data.access_token;
    const content = `
      <!DOCTYPE html>
      <html>
        <head><title>Authorizing Decap CMS...</title></head>
        <body>
          <p>Authorizing Decap CMS with GitHub, please wait...</p>
          <script>
            (function() {
              function receiveMessage(e) {
                window.opener.postMessage(
                  'authorization:github:success:${JSON.stringify({
                    token: token,
                    provider: "github",
                  })}',
                  e.origin
                );
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })();
          </script>
        </body>
      </html>
    `;

    return new NextResponse(content, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    console.error("GitHub OAuth exchange failed:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
