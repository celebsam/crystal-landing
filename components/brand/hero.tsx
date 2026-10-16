import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        {/* Editorial Architecture Background */}
        <div className="hero-backdrop">
          <Image
            src="/img/IMG_2105 2.JPG"
            alt="Courtyard oculus open to the sky centered on an ancient tree, illustrative of climate-responsive African architecture"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
        </div>

        <div className="page-width hero-content">
          <div className="hero-text-block">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              <span>Architect · Designer · Entrepreneur · Speaker · Researcher</span>
            </p>

            <h1 id="hero-title">
              <span className="hero-name">Crystal Kizor</span>
              <span className="hero-punchline">
                Designing spaces.
                <br />
                Shaping minds.
                <br />
                <em>Building what’s next.</em>
              </span>
            </h1>

            <p className="hero-description">
              At the intersection of climate-responsive architecture, contemporary African design,
              educational access, and spiritual purpose. Seven distinct initiatives, united by one
              conviction: <strong>human dignity and environmental flourishing</strong>.
            </p>

            <div className="hero-actions">
              <Button variant="editorial" asChild>
                <a href="#ecosystem">
                  Explore the Ecosystem <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button variant="editorialOutline" asChild>
                <a href="#pathways">
                  Where should I go next? <ArrowDown size={15} />
                </a>
              </Button>
            </div>

            {/* Quick Answer Strip in Hero for 1st-Time Visitors */}
            <div className="hero-quick-answers" aria-label="Quick overview">
              <div className="quick-item">
                <span className="quick-label">Who is she?</span>
                <span className="quick-val">Architect & Ecosystem Builder</span>
              </div>
              <div className="quick-sep" />
              <div className="quick-item">
                <span className="quick-label">What does she do?</span>
                <span className="quick-val">Builds spaces, products & platforms</span>
              </div>
              <div className="quick-sep" />
              <div className="quick-item">
                <span className="quick-label">What is she building?</span>
                <span className="quick-val">7 integrated initiatives for Africa</span>
              </div>
            </div>
          </div>

          {/* Floating Hero Portrait Badge */}
          <div className="hero-portrait-card">
            <div className="portrait-wrapper">
              <Image
                src="/img/Crystal_s pictures/Architectural Studio Portrait.png"
                alt="Portrait of Crystal Kizor at her architectural design studio desk"
                width={500}
                height={750}
                priority
                sizes="(max-width: 900px) 260px, 340px"
                className="portrait-img"
              />
              <div className="portrait-badge">
                <Sparkles size={14} />
                <span>Multidisciplinary Practice</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-width hero-bottom">
          <a href="#about" className="hero-scroll-link">
            <ArrowDown size={15} /> Discover Crystal’s story & philosophy
          </a>
          <span className="hero-tagline-right">Spaces · Systems · Purpose</span>
        </div>
      </section>

      {/* Discipline Strip */}
      <div className="discipline-strip">
        <div className="page-width">
          <span className="discipline-label">The Interconnected Disciplines</span>
          <p className="discipline-list">
            <span>Architecture</span> <i>·</i>
            <span>Interiors</span> <i>·</i>
            <span>Furniture</span> <i>·</i>
            <span>Education</span> <i>·</i>
            <span>Social Impact</span> <i>·</i>
            <span>Keynotes</span> <i>·</i>
            <span>Faith</span>
          </p>
        </div>
      </div>
    </>
  );
}
