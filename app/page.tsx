import { SiteHeader } from "@/components/brand/site-header";
import { Hero } from "@/components/brand/hero";
import { Ecosystem } from "@/components/brand/ecosystem";
import { PortfolioGallery } from "@/components/brand/portfolio-gallery";
import { VisitorPathways } from "@/components/brand/visitor-pathways";
import {
  Introduction,
  Perspective,
  Contact,
  SiteFooter,
} from "@/components/brand/editorial-sections";

export default function Home() {
  return (
    <div id="top" className="site-wrapper">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Introduction />
        <Ecosystem />
        <PortfolioGallery />
        <VisitorPathways />
        <Perspective />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
