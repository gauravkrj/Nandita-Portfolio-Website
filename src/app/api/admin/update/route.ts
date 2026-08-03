import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function POST(req: Request) {
  try {
    const { password, hero, about, contact, brands } = await req.json();

    // Verify Password
    if (password !== "Nandita2026!" && password !== "admin123") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentDir = path.join(process.cwd(), "src", "content");

    if (hero) {
      fs.writeFileSync(path.join(contentDir, "hero.json"), JSON.stringify(hero, null, 2));
    }
    if (about) {
      fs.writeFileSync(path.join(contentDir, "about.json"), JSON.stringify(about, null, 2));
    }
    if (contact) {
      fs.writeFileSync(path.join(contentDir, "contact.json"), JSON.stringify(contact, null, 2));
    }
    if (brands) {
      fs.writeFileSync(path.join(contentDir, "brand_collaborations.json"), JSON.stringify(brands, null, 2));
    }

    return NextResponse.json({ success: true, message: "Site content updated successfully." });
  } catch (error) {
    console.error("Failed to update site content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
