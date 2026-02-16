"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  "/assets/hero-bg.jpg",
  "/assets/security-guard-workspace-2.jpg",
  "/assets/security-guard-workspace.jpg",
  "/assets/service-6.jpg",
  "/assets/service-3.jpg",
  "/assets/about-us.jpg",
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
        <div className="w-full max-md:pl-2 h-[120vh] bg-cover bg-center bg-[#EED7C8]/25" style={{
          backgroundImage: "url('/assets/new/bg-2-cropped.svg')",
        }}>
            <section
                id="home"
                ref={heroRef}
                className="relative h-[120vh] min-h-[700px] w-full flex flex-col items-center justify-center text-center px-5 overflow-visible bg-cover bg-center"
                style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0% 90%)',
                    WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 53.5% 90%, 50% 95.5%, 46% 90%, 0% 90%)'
                }}
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
                    />
                ))}

                {/* LOGO CONTAINER */}
                <div 
                    ref={logoRef} 
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
                >
                    <Image 
                        src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg" 
                        alt="Logo" 
                        width={500} 
                        height={250} 
                        priority
                        className="lg:w-[500px] w-[240px] lg:h-[50vh] h-[40vh] object-contain" 
                    />
                </div>
            </section>
        </div>
    );
};