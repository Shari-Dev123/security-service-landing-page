"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "TRAINED & CERTIFIED PROFESSIONALS",
    description:
      "Our security personnel are carefully selected, fully trained, and certified to handle all types of security situations with professionalism, discipline, and confidence.",
  },
  {
    title: "24/7 RELIABLE PROTECTION",
    description:
      "We provide round-the-clock security services to ensure continuous protection of your people, property, and assets—day and night, without compromise.",
  },
  {
    title: "IN-HOUSE GUARD MONITORING SYSTEM",
    description:
      "Our proprietary guard monitoring system allows real-time tracking, reporting, and supervision—ensuring accountability, transparency, and superior service quality.",
  },
];

export const Excellence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        "h2",
        { y: 30 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Features Stagger Animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Image Animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, clipPath: "inset(0 0 0 100%)" },
        {
          opacity: 1,
          x: 0,
          clipPath: "inset(0 0 0 0%)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      /* 1. Ensure the section is the 'anchor' for everything */
      className="relative min-h-screen border-b-3 border-white bg-[#EED7C8]/45 w-full overflow-hidden bg-cover bg-center bg-no-repeat  py-32 lg:py-16 px-8 sm:px-16 lg:px-20"
    >
      {/* 2. THE OVERLAY: This is now a sibling to the content, not a parent. 
      This ensures it applies evenly to the entire background space. */}
      <div
        className="absolute inset-0 opacity-50 bg-no-repeat z-0 bg-left
             bg-[length:30%] 
             max-md:bg-[length:60%]"
        style={{ backgroundImage: "url('/assets/new/excellence-bg.svg')" }} />

      {/* 3. THE CONTENT WRAPPER: Everything inside here will be ON TOP of the bg and overlay */}
      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Header - Now it will look identical to the grid below it */}
        <h2 className="font-agency w-full font-extralight text-3xl sm:text-5xl lg:text-7xl text-[#151E33] text-center mb-24 tracking-tight uppercase leading-none">
          Our Commitment to Excellence
        </h2>


        <div className="grid lg:grid-cols-3 gap-10 w-full lg:gap-20 items-stretch">
          {/* Left Side: Text Container */}
          <div className="lg:col-span-2 space-y-12">
            {features.map((feature) => (
          /* Change opacity-0 to opacity-100 to test if they appear */
          <div key={feature.title} className="feature-item opacity-100">
            <h3 className="font-agency text-2xl sm:text-4xl text-[#151E33] mb-3 font-bold uppercase">
              {feature.title}
            </h3>
            <p className="font-montserrat text-[#151E33]/80 text-lg font-medium">
              {feature.description}
            </p>
          </div>
        ))}
          </div>

          {/* Right Side: Image */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="relative w-full h-full min-h-[400px] border-[12px] border-white shadow-2xl">
              <Image src="/assets/excellence.jpg" alt="Security" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};