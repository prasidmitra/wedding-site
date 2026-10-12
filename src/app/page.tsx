import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { OurStory } from "@/components/OurStory";
import { WeekendOverview } from "@/components/WeekendOverview";
import { SangeetSection } from "@/components/SangeetSection";
import { HaldiSection } from "@/components/HaldiSection";
import { SunsetSequence } from "@/components/SunsetSequence";
import { VenueSection } from "@/components/VenueSection";
import { RsvpTeaser } from "@/components/RsvpTeaser";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <WeekendOverview />
      <OurStory />
      <SangeetSection />
      <HaldiSection />
      <SunsetSequence />
      <VenueSection />
      <RsvpTeaser />
      <Footer />
    </main>
  );
}
