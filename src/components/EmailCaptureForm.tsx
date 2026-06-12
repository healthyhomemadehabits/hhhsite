"use client";

import { useState } from "react";

interface EmailCaptureFormProps {
  buttonLabel: string;
  placeholder?: string;
  className?: string;
}

export default function EmailCaptureForm({
  buttonLabel,
  placeholder = "Enter your email",
  className,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");

  return (
    <form
      className={["capture", className].filter(Boolean).join(" ")}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder={placeholder}
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        {buttonLabel}
      </button>
    </form>
  );
}
