import { NextResponse } from "next/server";
import { getPageData } from "@/lib/get-page-data";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, phone, and message." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const { siteSettings } = await getPageData();
  const composed = `New trial enquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;

  const whatsappUrl = siteSettings.whatsapp
    ? `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(composed)}`
    : null;

  const mailtoUrl = siteSettings.email
    ? `mailto:${siteSettings.email}?subject=${encodeURIComponent(
        `Trial enquiry from ${name}`
      )}&body=${encodeURIComponent(composed)}`
    : null;

  return NextResponse.json({
    ok: true,
    whatsappUrl,
    mailtoUrl,
  });
}
