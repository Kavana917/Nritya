"use client";

import { FormEvent, useState } from "react";
import type { SiteSettings } from "@/lib/types";
import { Reveal } from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact({ settings }: { settings: SiteSettings }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();

      if (json.whatsappUrl) {
        window.open(json.whatsappUrl, "_blank", "noopener,noreferrer");
      } else if (json.mailtoUrl) {
        window.location.href = json.mailtoUrl;
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  const waHref = settings.whatsapp
    ? `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
        "Hello! I would like to book a free trial Bharatanatyam class."
      )}`
    : undefined;

  return (
    <section id="contact">
      <div className="panel-maroon panel-maroon-deep">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--gold)]">
                Get in Touch
              </p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl">
                Contact & Trial Booking
              </h2>
              <p className="mt-3 text-white/75">
                Reach out for a free trial, class questions, or Arangetram
                enquiries. We typically respond within one business day.
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <ul className="mt-8 space-y-4 text-white/90">
                {settings.phone && (
                  <li>
                    <a
                      href={`tel:${settings.phone.replace(/\s/g, "")}`}
                      className="hover:text-[var(--gold)]"
                    >
                      {settings.phone}
                    </a>
                  </li>
                )}
                {settings.email && (
                  <li>
                    <a
                      href={`mailto:${settings.email}`}
                      className="hover:text-[var(--gold)]"
                    >
                      {settings.email}
                    </a>
                  </li>
                )}
                {settings.address && (
                  <li className="text-white/75">{settings.address}</li>
                )}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {waHref && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
                  >
                    Chat on WhatsApp
                  </a>
                )}
                {settings.instagram && (
                  <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 px-4 py-2.5 text-sm hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    Instagram
                  </a>
                )}
                {settings.youtube && (
                  <a
                    href={settings.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 px-4 py-2.5 text-sm hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    YouTube
                  </a>
                )}
                {settings.facebook && (
                  <a
                    href={settings.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 px-4 py-2.5 text-sm hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </Reveal>

            {settings.mapEmbedUrl && (
              <Reveal delayMs={120}>
                <div className="mt-8 aspect-video overflow-hidden rounded-2xl ring-1 ring-white/20">
                  <iframe
                    src={settings.mapEmbedUrl}
                    title="Studio location"
                    className="h-full w-full border-0 grayscale-[30%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delayMs={100}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl bg-[var(--cream)] p-6 text-[var(--ink)] md:p-8"
            >
              <h3 className="font-display text-2xl text-[var(--maroon-deep)]">
                Send a message
              </h3>
              <div>
                <label htmlFor="name" className="text-sm text-[var(--ink-muted)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--maroon)]/20 bg-transparent px-3 py-2.5 outline-none focus:border-[var(--maroon)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-[var(--ink-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--maroon)]/20 bg-transparent px-3 py-2.5 outline-none focus:border-[var(--maroon)]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-[var(--ink-muted)]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--maroon)]/20 bg-transparent px-3 py-2.5 outline-none focus:border-[var(--maroon)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-[var(--ink-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-[var(--maroon)]/20 bg-transparent px-3 py-2.5 outline-none focus:border-[var(--maroon)]"
                  placeholder="I'd like to book a free trial class..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="cta-btn w-full rounded-full bg-[var(--maroon)] px-5 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[var(--maroon-deep)] disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Book a Free Trial"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-800">
                  Thanks! We opened WhatsApp / email so you can send your enquiry.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-700">{errorMsg}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
