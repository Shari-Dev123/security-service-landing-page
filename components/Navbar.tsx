"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT US", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        // Only track scroll on home page if there are more sub-sections
        // For now, let's keep it simple as we move to page-based nav
        setActiveSegment("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/services") {
      setActiveSegment("services");
    } else if (pathname === "/about") {
      setActiveSegment("about");
    } else if (pathname === "/") {
      setActiveSegment("home");
    }
  }, [pathname]);

  useEffect(() => {
    // Map activeSegment back to navLink href to find the element
    const currentLink = navLinks.find(link => {
      const linkSegment = link.href.replace(/[\/#]/g, "") || "home";
      return linkSegment === activeSegment;
    });

    if (currentLink) {
      const elementId = `nav-${currentLink.href.replace(/[\/#]/g, "") || "home"}`;
      const activeElement = document.getElementById(elementId);
      if (activeElement && navRef.current) {
        const { offsetLeft, offsetWidth } = activeElement;
        setIndicatorStyle({
          left: offsetLeft + offsetWidth / 2,
          width: 20,
        });
      }
    }
  }, [activeSegment]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 px-6 sm:px-12 flex items-center justify-between h-18",
          isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-white border-b border-gray-100"
        )}
      >
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image src="/assets/nav-logo-cropped.svg" alt="Logo" width={50} height={50} className="object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div ref={navRef} className="relative hidden lg:flex items-center gap-x-12 h-full">
          {navLinks.map((link) => {
            const linkId = link.href.replace(/[\/#]/g, "") || "home";
            const isActive = activeSegment === linkId;

            return (
              <Link
                key={link.name}
                id={`nav-${linkId}`}
                href={link.href}
                className={cn(
                  "font-montserrat text-[13px] font-medium transition-colors tracking-widest outline-none",
                  isActive ? "text-[#2D3350]" : "text-gray-400 hover:text-[#22263e]"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <div
            className="absolute -bottom-4 transition-all duration-500 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className="w-16 h-7 bg-white shadow-sm"
              style={{
                clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                filter: "drop-shadow(0 -2px 2px rgba(0,0,0,0.1))"
              }}
            />
          </div>
        </div>

        {/* Desktop Quote Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-x-6">
          <a href="tel:+447519300050" className="hidden sm:block">
            <div
              className="px-1.5 py-1 bg-[#2E3350] text-white rounded-full font-montserrat text-[16px] font-medium hover:brightness-125 transition-all tracking-wider cursor-pointer whitespace-nowrap"
            >
              GET A FREE QUOTE
            </div>
          </a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#2E3350] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[9998] bg-white transition-all duration-500 lg:hidden flex flex-col pt-20 px-6",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-y-6">
          {navLinks.map((link) => {
            const linkId = link.href.replace(/[\/#]/g, "") || "home";
            const isActive = activeSegment === linkId;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-montserrat text-xl font-semibold tracking-[0.1em] transition-colors",
                  isActive ? "text-[#E9A07D]" : "text-[#2D3350] hover:text-[#E9A07D]"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="w-full h-px bg-gray-100 my-2" />

          <a href="tel:+447519300050" className="w-full flex justify-center">
            <div
              className="w-full max-w-xs text-center px-6 py-3.5 bg-[#2E3350] text-white rounded-full font-montserrat text-base font-bold hover:brightness-125 transition-all tracking-widest uppercase"
            >
              GET A FREE QUOTE
            </div>
          </a>

          <p className="mt-4 font-montserrat text-xs text-gray-400 tracking-widest text-center">
            Professional Security Services <br />
            Available 24/7
          </p>
        </div>
      </div>
    </>
  );
};
