import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";
import { portfolioShowcase } from "@/data/brand";

export function PortfolioGallery() {
  return (
    <section id="portfolio" className="section-space portfolio-gallery page-width" aria-labelledby="portfolio-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Selected Realizations</p>
          <h2 id="portfolio-title">
            Architecture, craft &
            <br />
            <em>built environments.</em>
          </h2>
        </div>
        <p>
          A curated view into spaces and objects conceived through climate-responsive principles,
          tectonic honesty, and deep contextual attunement.
        </p>
      </div>

      <div className="portfolio-grid">
        {portfolioShowcase.map((item, index) => (
          <article
            key={item.id}
            className={`portfolio-card ${index === 0 || index === 1 ? "portfolio-card-large" : ""}`}
          >
            <div className="portfolio-media-wrap">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={item.imageWidth}
                height={item.imageHeight}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="portfolio-img"
                loading="lazy"
              />
              <div className="portfolio-tag-overlay">
                <span className="portfolio-initiative-tag">{item.initiative}</span>
                {item.location && <span className="portfolio-location-tag">{item.location}</span>}
              </div>
            </div>

            <div className="portfolio-info">
              <div className="portfolio-cat-row">
                <span className="portfolio-category">{item.category}</span>
              </div>
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-summary">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-action-banner">
        <div className="banner-text">
          <Compass size={24} className="banner-icon" />
          <div>
            <h4>Interested in commissioning an architectural project?</h4>
            <p>Studio COKA designs bespoke private residences, commercial spaces, and civic masterplans.</p>
          </div>
        </div>
        <a
          href="https://studiocoka.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-button banner-cta"
        >
          View Full Studio COKA Portfolio <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
