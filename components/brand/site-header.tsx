"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/brand";
import { useSiteStore } from "@/store/site";

export function SiteHeader() {
  const open = useSiteStore((s) => s.menuOpen);
  const setOpen = useSiteStore((s) => s.setMenuOpen);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="wordmark" href="#top" aria-label="Crystal Kizor home">
          crystal kizor<span className="wordmark-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="editorialOutline" asChild className="header-contact">
          <a href="#contact">
            Let’s connect <ArrowUpRight />
          </a>
        </Button>
        <Button
          ref={toggle}
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          ref={panel}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...navigation, { label: "Let’s connect", href: "#contact" }].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
