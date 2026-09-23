"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, MessageCircle, TriangleAlert, RotateCcw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <main className="pt-28 bg-surface min-h-screen flex items-center">
      <section className="max-w-3xl mx-auto px-gutter py-space-xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-secondary text-label-sm font-bold uppercase tracking-widest mb-space-md">
          <TriangleAlert size={16} className="text-primary" /> Something went wrong
        </div>
        <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
          A temporary <span className="text-primary-container">hiccup.</span>
        </h1>
        <p className="text-body-lg text-secondary leading-relaxed mb-space-lg max-w-lg mx-auto">
          This page ran into an unexpected error. Try again, or head back home —
          our forklift catalogue is still right where you left it.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all"
          >
            <RotateCcw size={18} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-headline-sm font-bold transition-all"
          >
            <Home size={18} /> Back to Home
          </Link>
          <a
            href="https://wa.me/923000214188?text=Hello%20EIRA%2C%20your%20website%20showed%20an%20error."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-headline-sm font-bold transition-all"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
