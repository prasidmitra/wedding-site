import type { Metadata } from "next";
import { GiftRegistry } from "@/components/GiftRegistry";

export const metadata: Metadata = {
  title: "Gift Registry, Tanuja & Prasid",
  description:
    "A few things that would make our newly-wed life a little sweeter.",
};

export default function RegistryPage() {
  return (
    <main className="page registry">
      <GiftRegistry />
    </main>
  );
}
