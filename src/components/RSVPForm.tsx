"use client";

import { useState } from "react";

const attendingOptions = [
  { value: "yes", label: "Joyfully accept" },
  { value: "no", label: "Regretfully decline" },
];

export function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet, this is where the reply would be persisted.
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

      <div>
        <button type="submit" className="btn btn--ivory">
          Send RSVP
        </button>
      </div>
    </form>
  );
}
