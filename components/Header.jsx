"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MessageCircle, Phone, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Forklifts", href: "/#forklifts-catalog" },
  { label: "Specifications", href: "/specifications" },
  { label: "About EIRA", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Support", href: "/#support" },
  { label: "Contact", href: "/contact" },
];

const WA_LINK = "https://wa.me/923000214188?text=Hello%20EIRA%2C%20I%20need%20forklift%20pricing";

function isActiveLink(item, pathname) {
  if (item.href === "/") return pathname === "/";
  if (item.href === "/#forklifts-catalog")
    return pathname === "/" || pathname.startsWith("/products");
  return pathname === item.href;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.10)]" : "shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Utility top bar — collapses on scroll for more viewport space */}
        <div
          className={`bg-on-surface text-surface-dim text-label-sm border-b border-tertiary/20 overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="wrapper h-8 flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse shrink-0"></span>
              <span className="tracking-wide uppercase text-surface-container-high truncate">
                Forklift Solutions for Pakistan — Sourcing &amp; Engineering direct from Karachi &amp; Shanghai
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-space-md text-surface-variant shrink-0">
              <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
                <Phone className="text-[13px]" />Karachi: +92 300 0214188
              </span>
              <span className="text-tertiary">|</span>
              <a
                className="flex items-center gap-space-xs text-primary-fixed hover:text-surface-container-lowest transition-colors"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="text-[13px]" />WhatsApp Sales
              </a>
              <span className="text-tertiary">|</span>
              <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
                <Mail className="text-[13px]" />support@eiraforklifts.com.pk
              </span>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="h-20 bg-surface/95 backdrop-blur-md">
          <div className="wrapper h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-lg min-w-0">
              <Link href="/" className="flex items-center gap-space-sm focus:outline-none shrink-0" aria-label="EIRA Forklifts Pakistan — home">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="text-headline-md font-extrabold tracking-tight text-on-surface">EIRA</span>
                    <span className="px-space-xs py-0.5 bg-on-surface text-primary-container text-[10px] rounded tracking-widest uppercase font-bold">
                      PAKISTAN
                    </span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                    Industrial Material Handling
                  </span>
                </div>
              </Link>
              <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
                {NAV.map((item) => {
                  const active = isActiveLink(item, pathname);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-3 py-2 rounded transition-colors text-body-md ${
                        active
                          ? "text-primary font-semibold bg-surface-container-high/50"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <a
                className="hidden sm:inline-flex items-center gap-space-xs px-3.5 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md transition-all shadow-sm"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="text-[18px]" />
                <span>WhatsApp Sales</span>
              </a>
              <Link
                className="hidden md:inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md uppercase tracking-wider font-bold transition-all transform hover:-translate-y-0.5 shadow-sm"
                href="/#quote-module"
              >
                <span>Request a Quote</span>
                <ArrowRight className="text-[16px]" />
              </Link>
              <div className="hidden sm:block pl-space-xs border-l border-surface-container-highest">
                <img
                  alt="EIRA Pakistan representative"
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest"
                  src="/images/profile.jpg"
                />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-surface shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between px-5 h-20 border-b border-tertiary/20">
            <div className="flex items-center gap-space-xs">
              <span className="text-headline-md font-extrabold tracking-tight text-on-surface">EIRA</span>
              <span className="px-space-xs py-0.5 bg-on-surface text-primary-container text-[10px] rounded tracking-widest uppercase font-bold">
                PAKISTAN
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
            {NAV.map((item) => {
              const active = isActiveLink(item, pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-body-lg font-semibold transition-colors ${
                    active
                      ? "text-primary bg-primary-container/15"
                      : "text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {item.label}
                  <ArrowRight size={16} className={active ? "text-primary" : "text-secondary"} />
                </Link>
              );
            })}
          </nav>
          <div className="px-5 pb-6 pt-2 border-t border-tertiary/20 space-y-3">
            <Link
              href="/#quote-module"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-container text-on-primary-container text-label-md uppercase tracking-wider font-bold btn-3d"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-label-md font-bold btn-3d"
            >
              <MessageCircle size={18} /> WhatsApp Sales
            </a>
            <p className="text-center text-label-sm text-secondary pt-1">
              Karachi: +92 300 0214188
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
