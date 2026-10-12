import Link from "next/link";
import { registryComingSoon } from "@/data/registry";

export function RegistryComingSoon() {
  return (
    <div className="container page__inner registry__inner">
      <header className="page__head">
        <Link href="/" className="page__back">
          ← Back to the wedding
        </Link>
        <span className="kicker">{registryComingSoon.kicker}</span>
        <h1 className="display">{registryComingSoon.title}</h1>
        <p className="lead">{registryComingSoon.lead}</p>
      </header>
    </div>
  );
}
