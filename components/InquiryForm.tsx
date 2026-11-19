"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { getCopy, type Locale } from "@/lib/content";
import { whatsappNumber } from "@/lib/site";

type FormKind = "booking" | "partner" | "contact";

const bookingWhatsappNumber = "966540328480";

export function InquiryForm({
  locale,
  kind,
}: {
  locale: Locale;
  kind: FormKind;
}) {
  const copy = getCopy(locale);
  const labels = copy.ui.form;
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (kind === "booking") {
      const booking = {
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        vehicle: String(formData.get("vehicle") ?? ""),
        pickup: String(formData.get("pickup") ?? ""),
        destination: String(formData.get("destination") ?? ""),
        fromDateTime: String(formData.get("fromDateTime") ?? ""),
        toDateTime: String(formData.get("toDateTime") ?? ""),
      };

      setIsSubmitting(true);
      setStatus(labels.bookingSaving);
      try {
        const response = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(booking),
        });
        if (!response.ok) {
          throw new Error("Booking save failed");
        }

        setStatus(labels.bookingSubmitted);
        await new Promise((resolve) => window.setTimeout(resolve, 1000));

        const whatsappUrl = `https://wa.me/${bookingWhatsappNumber}?text=${encodeURIComponent(
          [
            `${labels.name}: ${booking.name}`,
            `${labels.phone}: ${booking.phone}`,
            `${labels.email}: ${booking.email}`,
            `${labels.vehicle}: ${booking.vehicle}`,
            `${labels.pickup}: ${booking.pickup}`,
            `${labels.destination}: ${booking.destination}`,
            `${labels.fromDateTime}: ${booking.fromDateTime}`,
            `${labels.toDateTime}: ${booking.toDateTime}`,
          ].join("\n"),
        )}`;
        form.reset();
        window.location.assign(whatsappUrl);
      } catch {
        setStatus(labels.bookingSaveFailed);
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    if (!whatsappNumber) {
      setStatus(labels.sendingUnavailable);
      return;
    }

    const fieldLabels: Record<string, string> = {
      company: labels.company,
      name: labels.name,
      email: labels.email,
      phone: labels.phone,
      pickup: labels.pickup,
      destination: labels.destination,
      date: labels.date,
      passengers: labels.passengers,
      message: labels.message,
    };
    const message = [...formData.entries()]
      .filter(([, value]) => typeof value === "string" && value.trim())
      .map(([key, value]) => `${fieldLabels[key] ?? key}: ${value}`)
      .join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus(labels.sendingReady);
    form.reset();
  }

  return (
    <section
      className={`form-panel${kind === "booking" ? " booking-form-panel" : ""}`}
      aria-labelledby="inquiry-form-title"
    >
      <div className="form-heading">
        <span className="section-eyebrow">{copy.ui.book}</span>
        <h2 id="inquiry-form-title">{labels.formTitle}</h2>
        <p>{kind === "booking" || whatsappNumber ? labels.formNote : copy.ui.configureWhatsapp}</p>
      </div>
      <form className={`inquiry-form${kind === "booking" ? " booking-form" : ""}`} onSubmit={handleSubmit}>
        {kind === "partner" && (
          <label>
            {labels.company}
            <input name="company" autoComplete="organization" required />
          </label>
        )}
        {kind === "booking" ? (
          <>
            <div className="form-row">
              <label>
                {labels.name}
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                {labels.phone}
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>
            <label>
              {labels.email}
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <fieldset className="vehicle-selection">
              <legend>{labels.vehicle}</legend>
              <div className="vehicle-options">
                <label className="vehicle-option">
                  <input type="radio" name="vehicle" value="Toyota Coaster" required />
                  <span className="vehicle-option-image">
                    <Image
                      src="/images/toyota-coaster-2026.webp"
                      alt=""
                      width={480}
                      height={270}
                      style={{ width: "100%", height: "auto", maxHeight: 110, objectFit: "contain" }}
                    />
                  </span>
                  <span>{labels.coaster}</span>
                </label>
                <label className="vehicle-option">
                  <input type="radio" name="vehicle" value="Bus" required />
                  <span className="vehicle-option-image">
                    <Image
                      src="/images/higer-bus-51seats.webp"
                      alt=""
                      width={480}
                      height={270}
                      style={{ width: "100%", height: "auto", maxHeight: 110, objectFit: "contain" }}
                    />
                  </span>
                  <span>{labels.bus}</span>
                </label>
              </div>
            </fieldset>
            <div className="form-row">
              <label>
                {labels.pickup}
                <input name="pickup" autoComplete="street-address" required />
              </label>
              <label>
                {labels.destination}
                <input name="destination" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                {labels.fromDateTime}
                <input name="fromDateTime" type="datetime-local" required />
              </label>
              <label>
                {labels.toDateTime}
                <input name="toDateTime" type="datetime-local" required />
              </label>
            </div>
          </>
        ) : (
          <>
            <label>
              {labels.name}
              <input name="name" autoComplete="name" required />
            </label>
            <div className="form-row">
              <label>
                {labels.email}
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                {labels.phone}
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>
            <label>
              {labels.message}
              <textarea name="message" rows={4} required />
            </label>
          </>
        )}
        <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
          {labels.submit}
        </button>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
