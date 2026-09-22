"use client";

import { useEffect } from "react";

const MAX_TILT = 6; // degrees — subtle 3D tilt

export default function Tilt3D() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cards = Array.from(document.querySelectorAll(".tilt-3d"));
    const cleanups = cards.map((el) => {
      let raf = 0;
      const onMove = (e) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(950px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) translateY(-5px)`;
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(raf);
        el.style.transform = "";
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
