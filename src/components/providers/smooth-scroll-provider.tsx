"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && lenisRef.current?.lenis) {
      lenisRef.current.lenis.destroy();
      return;
    }

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        touchMultiplier: 1.8,
        smoothWheel: true,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}

function LenisGsapSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}
