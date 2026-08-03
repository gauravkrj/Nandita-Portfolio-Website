import { NextResponse } from "next/server";

const RECIPIENT_EMAILS = [
  "nanditasantra924@gmail.com",
  "gauravjha485@gmail.com",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, website, message, services } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      );
    }

    const payload = {
      submittedAt: new Date().toISOString(),
      recipients: RECIPIENT_EMAILS,
      data: {
        name,
        email,
        phone: phone || "Not provided",
        website: website || "N/A",
        message: message || "N/A",
        services: services && services.length > 0 ? services.join(", ") : "General Inquiry",
      },
    };

    console.log("----------------------------------------");
    console.log("NEW CONTACT FORM SUBMISSION RECEIVED:");
    console.log(`Forwarding to: ${RECIPIENT_EMAILS.join(" & ")}`);
    console.log(JSON.stringify(payload, null, 2));
    console.log("----------------------------------------");

    // If RESEND_API_KEY is available in environment, send real emails via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: RECIPIENT_EMAILS,
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
              <h2>New Contact Form Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Website / Handle:</strong> ${website || "N/A"}</p>
              <p><strong>Selected Services:</strong> ${services?.join(", ") || "None"}</p>
              <p><strong>Message:</strong> ${message || "N/A"}</p>
            `,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json();
          console.warn("Resend API Warning:", errData);
        }
      } catch (emailErr) {
        console.error("Failed to send via Resend API:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded and queued for delivery.",
        recipients: RECIPIENT_EMAILS,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
