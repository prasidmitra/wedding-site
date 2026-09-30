"use client";

import { useState } from "react";

const attendingOptions = [
  { value: "yes", label: "Joyfully accept" },
  { value: "maybe", label: "Still deciding" },
  { value: "no", label: "Regretfully decline" },
];

const plusOneOptions = [
  { value: "yes", label: "Yes, bringing a guest" },
  { value: "maybe", label: "Maybe" },
  { value: "no", label: "Just me" },
];

export function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string | null>(null);
  const [plusOne, setPlusOne] = useState<string | null>(null);
  const [plusOneName, setPlusOneName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const coming = attending !== "no";
    const payload = {
      name: name.trim(),
      attending,
      plusOne: coming ? plusOne : "no",
      plusOneName:
        coming && (plusOne === "yes" || plusOne === "maybe") ? plusOneName.trim() : "",
    };

    const endpoint = process.env.NEXT_PUBLIC_RSVP_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Non-fatal — the guest sees the confirmation either way.
      }
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rsvp-success">
        <span className="kicker">Received</span>
        <h2 className="display">Thank you{name ? `, ${name.split(" ")[0]}` : ""}.</h2>
        <p className="lead">
          {attending === "no"
            ? "We're sorry you can't make it, we'll raise a toast to you anyway."
            : attending === "maybe"
              ? "Take your time — we hope you can make it."
              : "We can't wait to see you in Kolkata."}
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__group">
        <label className="form__label" htmlFor="rsvp-name">
          Your name
        </label>
        <input
          id="rsvp-name"
          className="form__input"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <fieldset className="form__group">
        <legend className="form__label">Will you join us?</legend>
        <div className="form__seg">
          {attendingOptions.map((o) => (
            <label key={o.value} className="form__chip">
              <input
                type="radio"
                name="attending"
                value={o.value}
                required
                checked={attending === o.value}
                onChange={() => setAttending(o.value)}
              />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {attending !== "no" && (
        <fieldset className="form__group">
          <legend className="form__label">Bringing a plus one?</legend>
          <div className="form__seg">
            {plusOneOptions.map((o) => (
              <label key={o.value} className="form__chip">
                <input
                  type="radio"
                  name="plus-one"
                  value={o.value}
                  required
                  checked={plusOne === o.value}
                  onChange={() => {
                    setPlusOne(o.value);
                    if (o.value === "no") setPlusOneName("");
                  }}
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {attending !== "no" && (plusOne === "yes" || plusOne === "maybe") && (
        <div className="form__group">
          <label className="form__label" htmlFor="rsvp-plus-one-name">
            Your guest&apos;s name{plusOne === "maybe" ? " (optional)" : ""}
          </label>
          <input
            id="rsvp-plus-one-name"
            className="form__input"
            type="text"
            required={plusOne === "yes"}
            autoComplete="off"
            placeholder="Their name"
            value={plusOneName}
            onChange={(e) => setPlusOneName(e.target.value)}
          />
        </div>
      )}

      <div>
        <button type="submit" className="btn btn--ivory">
          Send RSVP
        </button>
        <p className="form__note" style={{ marginTop: "0.9rem" }}>
          Changed your mind? Submit again with the same name and we&apos;ll update
          your reply.
        </p>
      </div>
    </form>
  );
}
