const bookingFields = [
  "name",
  "phone",
  "email",
  "vehicle",
  "pickup",
  "destination",
  "fromDateTime",
  "toDateTime",
] as const;

const bookingSheetUrl =
  "https://script.google.com/macros/s/AKfycbwh5nMWTnN1OYX4ifhRMiU7rMU-DTUiQBWn3SgPM3r_uEZigzLQKRxMhiY8X1UmvFXgwQ/exec";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid booking request origin." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid booking request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid booking request." }, { status: 400 });
  }

  const booking = body as Record<string, unknown>;
  const payload: Record<string, string> = {};
  for (const field of bookingFields) {
    const value = booking[field];
    if (typeof value !== "string" || !value.trim()) {
      return Response.json({ error: "All booking fields are required." }, { status: 400 });
    }
    payload[field] = value.trim();
  }

  try {
    const response = await fetch(bookingSheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
    });

    const responseHost = new URL(response.url).hostname;
    const responseBody = await response.text();
    let scriptResult: unknown;
    try {
      scriptResult = JSON.parse(responseBody);
    } catch {
      scriptResult = null;
    }

    if (
      !response.ok ||
      !["script.google.com", "script.googleusercontent.com"].includes(responseHost) ||
      !scriptResult ||
      typeof scriptResult !== "object" ||
      !("result" in scriptResult) ||
      scriptResult.result !== "success"
    ) {
      return Response.json(
        { error: "Google Sheets did not confirm the booking. Deploy the latest Apps Script version and try again." },
        { status: 502 },
      );
    }
  } catch {
    return Response.json(
      { error: "Could not connect to Google Sheets. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
