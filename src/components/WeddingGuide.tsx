import { Reveal } from "@/components/Reveal";
import { AlpanaCircle, ConchOutline, Marigold, PaanLeaf, Petal } from "@/components/motifs";
import { traditions } from "@/data/traditions";

const motifMap: Record<string, typeof PaanLeaf> = {
  paan: PaanLeaf,
  alpana: AlpanaCircle,
  marigold: Marigold,
  petal: Petal,
  conch: ConchOutline,
};

export function WeddingGuide() {
  return (
    <section className="section guide" id="guide">
      <div className="container">
        <Reveal>
          <div className="section__head section__head--center">
            <span className="kicker">The Guide</span>
            <h2 className="display display--md">A Bengali wedding, explained</h2>
            <p className="lead">
              New to all this? Here&apos;s what&apos;s happening, roughly in the
              order it happens, and why everyone suddenly starts singing.
            </p>
          </div>
        </Reveal>

        <div className="guide__grid">
          {traditions.map((t, i) => {
            const Motif = motifMap[t.motif] ?? PaanLeaf;
            return (
              <Reveal key={t.id} delay={(i % 3) * 0.07}>
                <article className="guide__card">
                  <div className="guide__motif" aria-hidden>
                    <Motif />
                  </div>
                  <span className="kicker">0{i + 1}</span>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
