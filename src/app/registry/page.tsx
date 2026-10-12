import type { Metadata } from "next";
import { GiftRegistry } from "@/components/GiftRegistry";
import { RegistryComingSoon } from "@/components/RegistryComingSoon";

export const metadata: Metadata = {
  title: "Gift Registry, Tanuja & Prasid",
  description:
    "A few things that would make our newly-wed life a little sweeter.",
};

// The full registry is only shown during local development.
// The live site gets a "coming soon" placeholder until it's ready.
const showRegistry = process.env.NODE_ENV === "development";

export default function RegistryPage() {
  return (
    <main className="page registry">
      {showRegistry ? <GiftRegistry /> : <RegistryComingSoon />}
    </main>
  );
}
