import Link from "next/link";
import { gifts, registryIntro, deliveryAddress, registryNote } from "@/data/registry";
import { Marigold } from "@/components/motifs";

export function GiftRegistry() {
  return (
    <div className="container page__inner registry__inner">
      <header className="page__head">
        <Link href="/" className="page__back">
          ← Back to the wedding
        </Link>
        <span className="kicker">{registryIntro.kicker}</span>
        <h1 className="display">{registryIntro.title}</h1>
        <p className="lead">{registryIntro.lead}</p>
      </header>

      <ul className="gift-list">
        {gifts.map((gift) => (
          <li key={gift.id} className="gift">
            <Marigold className="gift__motif" />

            <div className="gift__body">
              <span className="kicker">{gift.kicker}</span>
              <h2 className="gift__title">{gift.title}</h2>
              <p className="gift__blurb">{gift.blurb}</p>
            </div>

            {gift.kind === "buy" ? (
              <div className="gift__actions">
                <a
                  className="btn btn--solid gift__buy"
                  href={gift.buy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {gift.buy.label} ↗
                </a>
                <p className="gift__ship">
                  Ships to <strong>{deliveryAddress}</strong>
                </p>
              </div>
            ) : (
              <div className="gift__actions">
                <Link href="/gift" className="btn btn--solid gift__buy">
                  Send a cash gift
                </Link>
                <p className="gift__ship">Zelle · Venmo · UPI — write a note and seal it</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      <aside className="registry__note">
        <span className="kicker">{registryNote.kicker}</span>
        <p>{registryNote.text}</p>
      </aside>
    </div>
  );
}
