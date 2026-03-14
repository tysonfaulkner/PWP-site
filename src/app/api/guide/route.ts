import { NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY!;
const MAILERLITE_GUIDE_GROUP_ID = "181854020549216069"; // TODO: create a "Lead Magnet" group in Mailerlite and update this ID

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const res = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          fields: {
            name: name || "",
          },
          groups: [MAILERLITE_GUIDE_GROUP_ID],
          status: "active",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Mailerlite error:", err);
      return NextResponse.json(
        { error: "Failed to process your request." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      downloadUrl: "/how-to-pay-your-crew-20-percent-more.pdf",
    });
  } catch (error) {
    console.error("Guide form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
