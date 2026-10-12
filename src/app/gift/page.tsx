import type { Metadata } from "next";
import { GiftEnvelope } from "@/components/GiftEnvelope";

export const metadata: Metadata = {
  title: "Send a Gift, Tanuja & Prasid",
  description: "Seal a note and send a cash gift to Tanuja & Prasid.",
};

export default function GiftPage() {
  return (
    <main className="page gift-page">
      <GiftEnvelope />
    </main>
  );
}
