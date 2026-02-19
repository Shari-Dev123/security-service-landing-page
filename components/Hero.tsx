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
  "/assets/new/hero-image-3.jpg",
  "/assets/new/hero-image-4.jpg",
  "/assets/security-guard-workspace.jpg",
  "/assets/service-6.jpg",
  "/assets/service-3.jpg",
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
    }, 4000); // Change every 4 seconds

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
    <div className="w-full max-md:pl-2 h-[120vh] bg-cover bg-center w-[100vw] bg-[#EED7C8]/45" style={{
      // backgroundImage: "url('/assets/new/bg-1-cropped.svg')",
    }}>
      <section
        id="home"
        ref={heroRef}
        className="relative h-[120vh] min-h-[700px] w-full flex flex-col items-center justify-center text-center px-5 overflow-visible bg-cover bg-center max-lg:border-b-2 max-lg:border-white lg:[clip-path:polygon(0%_0%,44.5%_0%,50%_6.6%,55.5%_0%,100%_0%,100%_90%,55.5%_90%,50%_97.5%,44.5%_90%,0%_90%)]"
      >
        {/* Background Images with Fade Transition */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("${img}")`,
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
            }}
          >
            <div
              ref={logoRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
            >{
                index !== 1 && index !== 2 && (<Image
                  src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg"
                  alt="Logo"
                  width={500}
                  height={250}
                  priority
                  className="lg:w-[500px] max-md:w-[150px] max-md:h-[150px] w-[240px] lg:h-[50vh] h-[40vh] object-contain"
                />
              )}

              {(index === 1 || index === 2) && (
                <div className="flex relative left-10 flex-col items-start gap-3 pl-8 lg:pl-12">
                  <h2
                    className="text-white text-start lg:4xl xl:text-6xl font-agency font-light text-nowrap uppercase leading-snug tracking-wide"
                    style={{
                      // fontFamily: "'Arial Black', 'Impact', sans-serif",
                      // fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                      // maxWidth: "520px",
                    }}
                  >
                    Over 15 Years of<br />
                    Proven Security<br />
                    Expertise
                  </h2>
                  <Link
                    href="/about"
                    className=" font-agency text-lg px-3 bg-[#E9A07D] py-1.5 rounded-full uppercase tracking-widest transition-all duration-300 hover:bg-[#E9A07D]/90 hover:text-white"
                    style={{
                      // backgroundColor: "#E8C49A",
                      color: "#1a1a1a",
                      // fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* LOGO CONTAINER */}

      </section>
    </div>
  );
};