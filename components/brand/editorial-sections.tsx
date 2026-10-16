"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, MoveUp, Mail, MapPin, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { essaysAndIdeas, enquiryHref, contactEmail } from "@/data/brand";

export function Introduction() {
  return (
    <section
      id="about"
      className="page-width section-space introduction"
      aria-labelledby="about-title"
    >
      <div className="intro-portrait-wrapper">
        <div className="intro-portrait-frame">
          <Image
            src="/img/Crystal_s pictures/Earthy Editorial Portrait by African Architecture.png"
            alt="Crystal Kizor seated in thoughtful contemplation beside African Architecture volumes"
            width={700}
            height={850}
            sizes="(max-width: 800px) 100vw, 440px"
            className="intro-portrait-img"
          />
          <div className="intro-image-overlay">
            <span className="portrait-badge-label">
              <Sparkles size={12} /> Crystal Kizor · Multidisciplinary Leader
            </span>
          </div>
        </div>
        <p className="portrait-caption">
          Photograph by African Architecture & design study archive
        </p>
      </div>

      <div className="intro-copy">
        <p className="eyebrow intro-eyebrow">01 / The Mind Behind The Work</p>
        <h2 id="about-title">
          An architect by practice.
          <br />
          <em>A builder at heart.</em>
        </h2>

        <p className="intro-lead">
          I’m Crystal Kizor—an architect, designer, researcher, and entrepreneur committed to
          reshaping how we inhabit spaces, build sustainable institutions, and cultivate minds
          across Africa.
        </p>

        <p>
          I operate across multiple disciplines because real transformation is never mono-disciplinary.
          To build a great building, you must understand climate and cultural memory. To scale a design
          practice, you must educate and equip practitioners. And to leave a legacy, you must open doors
          for young people to walk in dignity, truth, and purpose.
        </p>

        {/* 3 Foundational Anchors */}
        <div className="intro-anchors">
          <div className="anchor-item">
            <span className="anchor-num">01</span>
            <div>
              <h4>Spatial Excellence</h4>
              <p>Designing climate-conscious architecture and interiors that breathe with the tropics.</p>
            </div>
          </div>
          <div className="anchor-item">
            <span className="anchor-num">02</span>
            <div>
              <h4>Capacity & Opportunity</h4>
              <p>Expanding educational equity for youth (AKO) and professional mastery for architects (TEA).</p>
            </div>
          </div>
          <div className="anchor-item">
            <span className="anchor-num">03</span>
            <div>
              <h4>Cultural Dignity</h4>
              <p>Rooting furniture, ideas, and faith in African heritage, healing, and spiritual freedom.</p>
            </div>
          </div>
        </div>

        <div className="intro-links">
          <Button variant="editorial" asChild>
            <a href="#ecosystem">
              Explore the 7 Initiatives <ArrowDown size={16} />
            </a>
          </Button>
          <a href="#portfolio" className="text-link">
            View realized projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Perspective() {
  const [activeEssay, setActiveEssay] = useState<number>(0);

  return (
    <section id="ideas" className="perspective section-space" aria-labelledby="ideas-title">
      <div className="page-width">
        <div className="perspective-header">
          <p className="eyebrow perspective-eyebrow">04 / Ideas, Research & Inquiry</p>
          <div className="perspective-title-row">
            <h2 id="ideas-title">
              Good architecture begins
              <br />
              with a better <em>question.</em>
            </h2>
            <p className="perspective-subtitle">
              How do we build cities that endure tropical heat without consuming vast energy? How
              can contemporary African interiors express memory without cliché? Crystal’s personal
              research and writing explore the intersections of space, culture, and theology.
            </p>
          </div>
        </div>

        {/* Interactive Essay Tabs & Preview */}
        <div className="essays-container">
          <div className="essays-list" role="tablist" aria-label="Essays and research topics">
            {essaysAndIdeas.map((essay, index) => (
              <button
                key={essay.number}
                role="tab"
                aria-selected={activeEssay === index}
                className={`essay-tab-btn ${activeEssay === index ? "essay-tab-active" : ""}`}
                onClick={() => setActiveEssay(index)}
              >
                <div className="essay-tab-top">
                  <span className="essay-num">{essay.number}</span>
                  <span className="essay-tag">{essay.tag}</span>
                </div>
                <h3 className="essay-tab-title">{essay.title}</h3>
              </button>
            ))}
          </div>

          <div className="essay-preview-card" role="tabpanel">
            <div className="essay-preview-inner">
              <span className="essay-preview-badge">
                <BookOpen size={14} /> Essay Excerpt · {essaysAndIdeas[activeEssay].tag}
              </span>
              <h3>{essaysAndIdeas[activeEssay].title}</h3>
              <blockquote className="essay-quote">
                “{essaysAndIdeas[activeEssay].excerpt}”
              </blockquote>
              <div className="essay-preview-footer">
                <span className="author-tag">— Crystal Kizor, Architectural Research Archive</span>
                <Button variant="editorialLight" asChild>
                  <a
                    href="https://studiocoka.com/journal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Full Journal at Studio COKA <ArrowUpRight size={15} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="essay-gallery-callout">
              <div className="callout-image-wrap">
                <Image
                  src="/img/IMG_2103 2.PNG"
                  alt="Gallery hall with pierced terracotta brick wall filtering sunlight"
                  width={600}
                  height={500}
                  className="callout-image"
                  sizes="(max-width: 800px) 100vw, 360px"
                />
              </div>
              <p className="callout-caption">
                Terracotta screen study: Exploring passive daylighting and breeze permeability in
                exhibition typologies.
              </p>
            </div>
          </div>
        </div>

        <div className="perspective-topics">
          <span>Climate & Vernacular Memory</span>
          <span>Material Honesty & African Craft</span>
          <span>Systemic Architecture Practice</span>
          <span>Spiritual Purpose & Youth Identity</span>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<string>("Architecture & Interior Design");

  const topicEmails: Record<string, string> = {
    "Architecture & Interior Design": "Architecture & Interior Design Commission for Studio COKA",
    "Speaking Engagement / Keynote": "Keynote / Speaking Engagement Request for Crystal Kizor",
    "The Effective Architect (TEA)": "Inquiry regarding The Effective Architect Platform",
    "AKO Alliance Partnership": "Partnership & Sponsorship for AKO Alliance",
    "ELEvated Furniture Commission": "ELEvated Furniture & Custom Objects Commission",
    "Alive & Free Youth Movement": "Alive and Free Community & Youth Inquiry",
    "General / Research Collaboration": "Collaboration & General Inquiry for Crystal Kizor",
  };

  return (
    <section
      id="contact"
      className="page-width section-space contact-section"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">05 / Start A Conversation</p>
      <div className="contact-grid">
        <div>
          <h2 id="contact-title">
            Have an idea worth
            <br />
            <em>building together?</em>
          </h2>
          <p className="contact-lead">
            Whether you are planning an architectural commission, booking a keynote lecture,
            seeking to partner on youth education, or looking to scale your design practice,
            let’s connect with clarity and intention.
          </p>

          <div className="contact-meta">
            <div className="meta-row">
              <Mail size={16} />
              <div>
                <strong>Direct Studio Inquiries</strong>
                <a href={enquiryHref("Direct Inquiry via Website")} className="meta-link">
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="meta-row">
              <MapPin size={16} />
              <div>
                <strong>Studio & Operations</strong>
                <span>Lagos, Nigeria · Operating Globally Across Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-action-card">
          <h3>Choose Your Area of Interest</h3>
          <p className="action-hint">
            Select the focus of your message to directly route your inquiry:
          </p>

          <div className="topic-selector-grid">
            {Object.keys(topicEmails).map((topic) => (
              <button
                key={topic}
                type="button"
                className={`topic-btn ${selectedTopic === topic ? "topic-btn-selected" : ""}`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="contact-card-footer">
            <Button variant="editorial" size="lg" asChild className="w-full">
              <a href={enquiryHref(topicEmails[selectedTopic] || "General Inquiry")}>
                Proceed to Email with &ldquo;{selectedTopic}&rdquo; <ArrowUpRight size={16} />
              </a>
            </Button>
            <p className="contact-note">
              Inquiries are received directly by Crystal Kizor and the Studio COKA executive team.
              We respond promptly within 2 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const [year, setYear] = useState<number>(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#top" aria-label="Crystal Kizor back to top">
              crystal kizor<span className="wordmark-dot">.</span>
            </a>
            <p className="footer-slogan">
              Architect · Designer · Entrepreneur · Speaker · Researcher
            </p>
            <p className="footer-mission">
              Designing spaces. Empowering minds. Cultivating purposeful ecosystems for Africa’s
              built future.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">The Ecosystem</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="https://studiocoka.com/" target="_blank" rel="noopener noreferrer">
                  Studio COKA Architecture <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#ecosystem">ELEvated Furniture & Design</a>
              </li>
              <li>
                <a href="#ecosystem">AKO Alliance Education</a>
              </li>
              <li>
                <a href="#ecosystem">The Effective Architect (TEA)</a>
              </li>
              <li>
                <a href="#contact">Speaking Engagements</a>
              </li>
              <li>
                <a href="#ecosystem">Alive and Free Movement</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#about">About Crystal</a>
              </li>
              <li>
                <a href="#ecosystem">7 Initiatives</a>
              </li>
              <li>
                <a href="#portfolio">Selected Works</a>
              </li>
              <li>
                <a href="#pathways">Where Should I Go Next?</a>
              </li>
              <li>
                <a href="#ideas">Ideas & Research</a>
              </li>
              <li>
                <a href="#contact">Contact & Inquire</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/crystal-kizor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://studiocoka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  studiocoka.com <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#top" className="text-link back-top">
                  Back to top <MoveUp size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Crystal Kizor. All rights reserved.</span>
          <span>
            Studio COKA · AKO Alliance · ELEvated · The Effective Architect · Alive and Free
          </span>
          <span className="footer-credit">Thoughtfully designed & engineered.</span>
        </div>
      </div>
    </footer>
  );
}
