export async function POST(request: Request) {
  let email: string;
  let groupParam: string;
  let firstName: string;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
    groupParam = typeof body?.group === "string" ? body.group : "";
    firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const freebieGroupId = process.env.MAILERLITE_FREEBIE_GROUP_ID;
  const waitlistGroupId = process.env.MAILERLITE_CONSULTATION_WAITLIST_GROUP_ID;

  if (!apiKey || !freebieGroupId) {
    console.error("Missing MAILERLITE_API_KEY or MAILERLITE_FREEBIE_GROUP_ID");
    return Response.json({ error: "Server configuration error." }, { status: 500 });
  }

  const resolvedGroupId =
    groupParam === "waitlist" && waitlistGroupId ? waitlistGroupId : freebieGroupId;

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
          email,
          groups: [resolvedGroupId],
          ...(firstName ? { fields: { name: firstName } } : {}),
        }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error("MailerLite error:", res.status, data);
      return Response.json(
        { error: "Could not subscribe. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("MailerLite fetch failed:", err);
    return Response.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }
}
