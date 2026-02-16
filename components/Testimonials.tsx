"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "JANE ANDERSON",
    role: "SECURITY COMPANY OWNER",
    text: '"OUTSTANDING SECURITY SERVICES WITH A HIGHLY PROFESSIONAL TEAM. THE IN-HOUSE GUARD MONITORING SYSTEM ADDS AN EXTRA LAYER OF CONFIDENCE AND ACCOUNTABILITY."',
  },
  {
    name: "JAMES WHITAKER",
    role: "CONSTRUCTION COMPANY MANAGER",
    text: '"WE\'VE BEEN USING THEIR SECURITY SERVICES FOR OVER A YEAR NOW, AND THE RELIABILITY IS OUTSTANDING. THE TEAM IS WELL-TRAINED, RESPONSIVE, AND EXTREMELY DISCIPLINED."',
  },
  {
    name: "SARAH MITCHELL",
    role: "RETAIL STORE MANAGER",
    text: '"THE K9 SECURITY SERVICES HAVE BEEN EXCEPTIONAL FOR OUR RETAIL PREMISES. PROFESSIONAL HANDLERS AND WELL-TRAINED DOGS PROVIDE EXCELLENT DETERRENCE AND PEACE OF MIND."',
  },
  {
    name: "DAVID THOMPSON",
    role: "EVENT COORDINATOR",
    text: '"THEIR EVENT SECURITY TEAM IS SECOND TO NONE. THEY HANDLED OUR LARGE-SCALE EVENTS WITH PROFESSIONALISM AND ENSURED EVERYTHING RAN SMOOTHLY FROM START TO FINISH."',
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        "h2",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Cards Animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            opacity: 0,
            y: 60
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative lg:-mb-5 " style={{
      // backgroundImage: "url('/assets/new/bg-1-cropped.svg')",

    }}>
      <div style={{
        backgroundImage: "url('/assets/new/bg-1-cropped.svg')",

      }} className="bg-cover bg-center bg-[#F8B178]/20 opacity-75 absolute inset-0 h-[50%]"></div>

      <section
        id="testimonials"
        ref={sectionRef}
        style={{
          backgroundImage: "url('/assets/removed-cut.svg')",
        }}
        className="z-60 pb-24 py-32 pb-40 px-6 relative bg-cover bg-center overflow-visible max-lg:border-t-2 max-lg:border-b-2 max-lg:border-white lg:[clip-path:polygon(0%_0%,44.5%_0%,50%_6%,55.5%_0%,100%_0%,100%_90%,55.9%_90%,50%_95%,44.1%_90%,0%_90%)]"
      >
        <div className="max-w-7xl max-lg:my-10 mx-auto">
          <h2 className="font-agency lg:px-30 text-5xl md:text-7xl text-white mb-20 tracking-tight uppercase">
            Customer Testimonials
          </h2>

          <div className="relative flex items-center justify-center gap-4 lg:gap-16">
            <button
              onClick={handlePrev}
              className="hidden lg:block text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={60} strokeWidth={1} />
            </button>

            <div
              ref={cardsRef}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {visibleTestimonials.map((t, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="group bg-white p-10 md:p-14 shadow-2xl relative flex flex-col justify-between min-h-[400px] transition-transform duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-right-5 duration-700"
                >
                  <div>
                    <h3 className="font-agency text-3xl text-[#151E33] leading-none mb-1 uppercase">
                      {t.name}
                    </h3>
                    <p className="font-agency text-3xl text-[#151E33] leading-none mb-1 uppercase">
                      {t.role}
                    </p>
                    <p className="font-montserrat text-[14px] md:text-[15px] font-bold text-[#2E3350] leading-relaxed italic opacity-90">
                      {t.text}
                    </p>
                  </div>

                  <div className="mt-10 flex justify-between items-end">
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#E9A07D" color="#E9A07D" />
                      ))}
                    </div>

                    <div className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-30 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="hidden lg:block text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={60} strokeWidth={1} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};