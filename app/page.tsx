"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Excellence } from "@/components/Excellence";
import { Testimonials } from "@/components/Testimonials";
// import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
// import { AboutUs } from "@/components/AboutUs";
// import { TrustExperience } from "@/components/TrustExperience";
// import { ServiceExpertise } from "@/components/ServiceExpertise";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <Hero />
      
      <div className='relative'>
        <Excellence />
        <div className='absolute -bottom-[98px] z-100 left-[50%] translate-x-[-50%]'>
          <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 H50 L25 25 Z" fill="white" />
          </svg>
        </div>
      </div>
      {/* <AboutUs/>
      <ServiceExpertise /> */}
      {/* <TrustExperience/> */}
      
      {/* <ContactSection /> */}
      
      <div className='relative'>
                <Testimonials />
                <div className='absolute -bottom-[99px] z-100 left-[50%] translate-x-[-50%]'>
                    <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 H50 L25 25 Z" fill="white" />
                    </svg>
                </div>
            </div>
            <Footer />
      <Chatbot />
    </main>
  );
}
