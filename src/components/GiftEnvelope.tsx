"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  usdChannel,
  inrChannel,
  type PaymentChannel,
  type PaymentMethod,
} from "@/data/registry";

const EASE = [0.22, 1, 0.36, 1] as const;

const channels: PaymentChannel[] = [usdChannel, inrChannel];

function noteLink(method: PaymentMethod, note: string): string {
  const trimmed = note.trim();
  if (!trimmed || !method.noteParam) return method.href;
  const sep = method.href.includes("?") ? "&" : "?";
  return `${method.href}${sep}${method.noteParam}=${encodeURIComponent(trimmed)}`;
}

export function GiftEnvelope() {
  const reduce = useReducedMotion();
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const canSend = message.trim().length > 0;

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(message.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the note stays visible to copy by hand.
    }
  }

  return (
    <div className="container page__inner gift-page__inner">
      <header className="page__head">
        <Link href="/" className="page__back">
          ← Back to the wedding
        </Link>
        <span className="kicker">Send a cash gift</span>
        <h1 className="display">Sealed with a note</h1>
        <p className="lead">
          Write a few words, and we&apos;ll receive them with the same warmth as
          if you&apos;d handed over a card in person.
        </p>
      </header>

      <div className="envelope">
        <motion.div
          className="envelope__flap"
          initial={false}
          animate={{ rotateX: opened ? -180 : 0 }}
          transition={{ duration: reduce ? 0 : 0.65, ease: EASE }}
        />

        <div className="envelope__body">
          {sent ? (
            <div className="envelope__sent">
              <span className="kicker">Your note</span>
              <p className="envelope__quote">&ldquo;{message.trim()}&rdquo;</p>
              <button type="button" className="envelope__copy" onClick={copyNote}>
                {copied ? "Copied ✓" : "Copy note"}
              </button>
            </div>
          ) : opened ? (
            <>
              <label className="envelope__label" htmlFor="gift-note">
                Your note
              </label>
              <textarea
                id="gift-note"
                className="envelope__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A wish, a memory, or just hello…"
                maxLength={280}
                rows={5}
              />
            </>
          ) : (
            <p className="envelope__hint">
              A sealed note for Tanuja &amp; Prasid.
              <br />
              Tap the seal to open it.
            </p>
          )}
        </div>

        <AnimatePresence>
          {!opened && (
            <motion.button
              key="seal"
              type="button"
              className="envelope__seal"
              onClick={() => setOpened(true)}
              aria-label="Open the envelope"
              initial={false}
              exit={reduce ? undefined : { opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
            >
              T &amp; P
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="envelope__controls">
        {!opened && (
          <button type="button" className="btn btn--solid" onClick={() => setOpened(true)}>
            Open the envelope
          </button>
        )}
        {opened && !sent && (
          <button
            type="button"
            className="btn btn--solid"
            disabled={!canSend}
            onClick={() => setSent(true)}
          >
            Seal &amp; send
          </button>
        )}
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            className="envelope__pay"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="display envelope__pay-title">
              How would you like to send it?
            </h2>
            <div className="gift__channels">
              {channels.map((channel) => (
                <div key={channel.id} className="gift__channel">
                  <span className="gift__channel-label">{channel.label}</span>
                  <div className="gift__methods">
                    {channel.methods.map((method) => (
                      <a
                        key={method.label}
                        className="gift__method"
                        href={noteLink(method, message)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.label}
                        {method.hint && (
                          <span className="gift__method-hint">{method.hint}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="envelope__pay-note">
              Your note travels with the UPI payment. For Zelle or Venmo, copy it
              above and paste it as your memo.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
