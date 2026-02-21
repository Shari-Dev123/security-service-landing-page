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
  // "/assets/new/hero-image-4.jpg",
  "/assets/new/hero-bg-7.jpeg",
  "/assets/new/hero-bg-66.png",
  "/assets/new/hero-bg-5.jpeg",
  "/assets/new/hero-bg-9.png",
  // "/assets/new/hero-image-88.jpg",
  "/assets/security-guard-workspace.jpg",
  // "/assets/service-6.jpg",
  // "/assets/new/hero-bg-10.jpeg",
  "/assets/about-us.jpg",
  "/assets/excellence.jpg",
];
// const heroImages = [
//   "/assets/hero-bg.jpg",
//   "/assets/new/hero-image-2.jpg",
//   "/assets/new/hero-image-4.jpg",
//   "/assets/new/hero-bg-7.jpeg",
//   "/assets/new/hero-bg-66.png",
//   "/assets/new/hero-bg-5.jpeg",
//   "/assets/new/hero-bg-9.png",
//   "/assets/security-guard-workspace.jpg",
//   "/assets/new/hero-bg-10.jpeg",
//   "/assets/about-us.jpg",
//   "/assets/excellence.jpg",
// ];

const heroImagesMobile = [
  // "/assets/hero-bg.jpg",
  // "/assets/new/hero-image-2.jpg",
  "/assets/new/security.jpg",
  "/assets/new/security-cam.jpg",
  "/assets/new/security-dog.jpg",
  "/assets/new/security-person.jpg",
  "/assets/new/hero-bg-7.jpeg",
  "/assets/new/hero-bg-66.png",
  "/assets/new/hero-bg-5.jpeg",
  // "/assets/new/hero-bg-9.png",
  "/assets/security-guard-workspace.jpg",
  "/assets/new/hero-bg-10.jpeg",
  // "/assets/about-us.jpg",
  "/assets/excellence.jpg",
];

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 1024);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

const images = isMobile ? heroImagesMobile : heroImages;

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="w-full h-[100svh] bg-[#EED7C8]/45  pt-18 lg:h-[120vh] bg-cover">
      <section
  id="home"
  ref={heroRef}
  className="relative z-100 h-[100svh] lg:h-[120vh] min-h-[500px] w-full flex flex-col items-center justify-center text-center px-5 overflow-hidden"
  style={{
    clipPath: `polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - 60px),
      calc(50% + 80px) calc(100% - 60px),
      50% 100%,
      calc(50% - 80px) calc(100% - 60px),
      0% calc(100% - 60px)
    )`
  }}
>
        {/* Background Images with Fade Transition */}
        {images.map((img, index) => {
          // Optimization: Only render current, previous, and next images to keep memory low and prevent all images loading at once
          const isCurrent = currentImageIndex === index;
          const isNext = (currentImageIndex + 1) % heroImages.length === index;
          const isPrev = (currentImageIndex - 1 + heroImages.length) % heroImages.length === index;

          if (!isCurrent && !isNext && !isPrev) return null;
            if (!img) return null;
          

          return (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: isCurrent ? 1 : 0,
                zIndex: isCurrent ? 1 : 0,
                backgroundColor: "#0d0e14",
              }}
            >
              {/* Optimized Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="max-lg:object-cover"
                  sizes="100vw"
                  quality={75}
                />

                {/* Standard overlay (Tablet+) */}
                <div
                  className="absolute inset-0 hidden sm:block"
                  style={{
                    background: "linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4))",
                  }}
                />

                {/* Mobile overlay for text legibility */}
                <div
                  className="absolute inset-0 sm:hidden"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(10,11,16,0.5) 0%, rgba(10,11,16,0.25) 40%, rgba(10,11,16,0.6) 100%)",
                  }}
                />
              </div>

              {/* Logo / Content overlay — vertically centered, left-aligned with refined padding and sizing */}
              <div
  ref={index === 0 ? logoRef : undefined}
  className="absolute z-20 top-1/2 -translate-y-1/2 left-0  flex flex-col items-start max-w-[55%] sm:max-w-[60%] lg:max-w-none"
>
  {index !== 1 && index !== 2 && (
    <Image
      src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg"
      alt="Logo"
      width={0}
      height={0}
      priority={index === 0}
      className="object-contain lg:pl-20 pl-5 object-left w-[100px] h-[85px] min-[375px]:w-[120px] min-[375px]:h-[100px] min-[430px]:w-[135px] min-[430px]:h-[115px] sm:w-[210px] sm:h-[170px] md:w-[260px] md:h-[210px] lg:w-[500px] lg:h-[50vh]"
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
          );
        })}

        {/* Dot indicators — visible on mobile/tablet only */}
        <div className="absolute lg:bottom-24 bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === currentImageIndex
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