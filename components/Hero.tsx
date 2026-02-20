"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  "/assets/hero-bg.jpg",
  "/assets/new/hero-image-2.jpg",
  "/assets/new/hero-bg-7.jpeg",
  "/assets/new/hero-bg-66.png",
  "/assets/new/hero-bg-5.jpeg",
  "/assets/new/hero-bg-9.png",
  // "/assets/new/hero-image-88.jpg",
  "/assets/security-guard-workspace.jpg",
  // "/assets/service-6.jpg",
  "/assets/new/hero-bg-10.jpeg",
  "/assets/about-us.jpg",
  "/assets/excellence.jpg",
];

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    gsap.to(heroRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-[100svh] pt-18 lg:h-[120vh] bg-contain">
      <section
        id="home"
        ref={heroRef}
        className="relative  z-100 h-[100svh] lg:h-[120vh] min-h-[500px] w-full flex flex-col items-center justify-center text-center px-5 overflow-hidden [clip-path:polygon(0%_0%,44.5%_0%,50%_0.0%,59.5%_0%,100%_0%,100%_90%,55.5%_90%,50%_97.5%,44.5%_90%,0%_90%)]"
      >
        {/* Background Images with Fade Transition */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("${img}")`,
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
              backgroundColor: "#0d0e14", // dark backdrop for contain mode on mobile
            }}
          >
            {/* Mobile (<640px): object-contain so full image is visible, no cropping */}
            {/* Tablet and up: bg-cover like desktop */}
            <>
              {/* Mobile-only: contained image */}
              <div className="absolute inset-0 flex items-center justify-center sm:hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Mobile overlay for text legibility */}
              <div
                className="absolute inset-0 sm:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(10,11,16,0.5) 0%, rgba(10,11,16,0.25) 40%, rgba(10,11,16,0.6) 100%)",
                }}
              />

              {/* Tablet and up: bg-cover */}
              <div
                className="absolute inset-0 bg-no-repeat bg-contain h-full w-full bg-center hidden sm:block"
                style={{
                  backgroundImage: `linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("${img}")`,
                }}
              />
            </>

            {/* Logo / Content overlay — vertically centered, left-aligned on all screens */}
            <div
              ref={index === 0 ? logoRef : undefined}
              className="absolute z-20 top-1/2 -translate-y-1/2 left-0 flex flex-col items-start"
            >
              {index !== 1 && index !== 2 && (
                <Image
                  src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  priority={index === 0}
                  className="object-contain w-[140px] h-[120px] sm:w-[210px] sm:h-[170px] md:w-[260px] md:h-[210px] lg:w-[500px] lg:h-[50vh]"
                />
              )}

              {(index === 1 || index === 2) && (
                <div className="flex flex-col items-start gap-3 pl-5 sm:pl-8 md:pl-10 lg:pl-12 lg:left-10 lg:relative">
                  <h2
                    ref={index === 1 ? titleRef : undefined}
                    className="text-white text-start font-agency font-light uppercase leading-snug tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:text-nowrap"
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
                  >
                    Over 15 Years of<br />
                    Proven Security<br />
                    Expertise
                  </h2>
                  <Link
                    href="/about"
                    className="font-agency text-base sm:text-lg px-4 bg-[#E9A07D] py-1.5 rounded-full uppercase tracking-widest transition-all duration-300 hover:bg-[#E9A07D]/90 hover:text-white"
                    style={{ color: "#1a1a1a", letterSpacing: "0.1em" }}
                  >
                    Read More
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Dot indicators — visible on mobile/tablet only */}
        <div className="absolute lg:bottom-24 bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentImageIndex
                  ? "w-4 h-2 bg-[#E9A07D]"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};