"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, initiatives, enquiryHref, type Initiative } from "@/data/brand";
import { useSiteStore } from "@/store/site";

function DetailAccordion({ initiative }: { initiative: Initiative }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="initiative-accordion" id={`initiative-${initiative.id}`}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{open ? `Hide details for ${initiative.name}` : `Read more about ${initiative.name}`}</span>
        {open ? <Minus size={15} /> : <Plus size={15} />}
      </button>

      {open && (
        <div className="accordion-content">
          <p>{initiative.detail}</p>
          {initiative.stats && (
            <div className="initiative-meta-pill">
              <span className="pill-label">{initiative.stats.label}:</span>
              <span className="pill-val">{initiative.stats.value}</span>
            </div>
          )}
          <div className="accordion-action">
            {initiative.external ? (
              <a
                className="text-link"
                href={initiative.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit official site <ExternalLink size={14} />
              </a>
            ) : (
              <a
                className="text-link"
                href={
                  initiative.href.startsWith("#")
                    ? initiative.href
                    : enquiryHref(`Inquiry regarding ${initiative.name}`)
                }
              >
                {initiative.action} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Ecosystem() {
  const category = useSiteStore((s) => s.category);
  const setCategory = useSiteStore((s) => s.setCategory);

  const shown = initiatives.filter(
    (item) => category === "All initiatives" || item.category === category,
  );

  return (
    <section id="ecosystem" className="section-space ecosystem page-width" aria-labelledby="ecosystem-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / The Integrated Ecosystem</p>
          <h2 id="ecosystem-title">
            Different expressions.
            <br />
            <em>One connected vision.</em>
          </h2>
        </div>
        <p>
          Crystal Kizor’s ecosystem bridges the tangible and the systemic—from climate-conscious
          buildings and tactile furniture to educational equity, practitioner masterclasses, and
          faith communities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="category-tabs" role="tablist" aria-label="Filter initiatives by category">
        {categories.map((item) => (
          <Button
            key={item}
            variant="category"
            role="tab"
            aria-selected={item === category}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* Initiatives Grid */}
      <div className="initiative-grid" aria-live="polite">
        {shown.map((item) => {
          return (
            <article key={item.id} className="initiative-card">
              <div className="initiative-image-container">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="initiative-card-img"
                  loading="lazy"
                />
                <span className="initiative-category-badge">{item.category}</span>
              </div>

              <div className="initiative-card-body">
                <span className="eyebrow initiative-label">{item.label}</span>
                <h3 className="initiative-title">
                  {item.name}
                  {item.id === "tea" && <span className="tea-abbr"> / TEA</span>}
                </h3>
                <p className="initiative-tagline-sub">{item.tagline}</p>
                <p className="initiative-description">{item.description}</p>

                <DetailAccordion initiative={item} />

                <div className="initiative-card-footer">
                  {item.external ? (
                    <a
                      className="text-link primary-link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.action} <ExternalLink size={15} />
                    </a>
                  ) : (
                    <a className="text-link primary-link" href={item.href}>
                      {item.action} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="ecosystem-footnote">
        <span>7 Initiatives · Connected by purpose, context, and human flourishing</span>
        <span>Built for Africa · In conversation with the world</span>
      </div>
    </section>
  );
}
