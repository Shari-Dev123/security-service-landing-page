"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Image from "next/image";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showSIAField, setShowSIAField] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          formRef.current?.reset();
          setShowSIAField(false);
          // Reset status after 5 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 5000);
        },
        () => {
          setStatus("error");
          setIsSubmitting(false);
          // Reset status after 5 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative bg-[#151E33]/90 mb-1 border-t-white border-t-4 border-b-0 border-b-white py-24 lg:py-32 px-6 overflow-hidden"
      style={{

      }}>
      {/* GEOMETRIC BACKGROUND */}

      {/* <div className="absolute inset-0 bg-geometric-pattern opacity-30 pointer-events-none"></div> */}
      <div className="absolute inset-0 z-100 flex items-center justify-center pointer-events-none">
        <div className="relative w-[120%] h-[120%] opacity-[0.09]">
          <Image
            src="/assets/SVG_Asset-11.svg"
            alt="Logo Watermark"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* TOP NOTCH TRANSITION FROM TESTIMONIALS */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-[#fdfbf9] z-10"></div> */}

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-agency text-5xl md:text-7xl text-white tracking-tight uppercase">
            Get In Touch
          </h2>
          {/* <p className="font-montserrat text-white/60 mt-4 max-w-2xl mx-auto">
            Ready to secure your assets? Send us a message or find our headquarters using the map below.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 items-stretch">

          <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-full border-[10px] border-white shadow-2xl overflow-hidden group">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.744161947849!2d-1.4194464!3d53.3835694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487982637f59d57d%3A0x7d6b8807d4b2f8a1!2sDarnall%20Rd%2C%20Sheffield!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.2] group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-[#2E3350]/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 md:p-14 shadow-2xl relative flex flex-col justify-center">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full border-b-2 border-gray-200 focus:border-[#2E3350] outline-none py-2 font-montserrat transition-colors bg-transparent text-[#2E3350]"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full border-b-2 border-gray-200 focus:border-[#2E3350] outline-none py-2 font-montserrat transition-colors bg-transparent text-[#2E3350]"
                    placeholder="EMAIL@EXAMPLE.COM"
                  />
                </div>
              </div>

              {/* Subject */}
<div className="space-y-2">
  <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">
    Subject
  </label>
  <input
    type="text"
    name="subject"
    required
    className="w-full border-b-2 border-gray-200 focus:border-[#2E3350] outline-none py-2 font-montserrat transition-colors bg-transparent text-[#2E3350]"
    placeholder={
      showSIAField
        ? "APPLICATION FOR SECURITY OFFICER POSITION"
        : "SECURITY CONSULTATION"
    }
  />
</div>

              {/* Toggle for SIA Number */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowSIAField(!showSIAField)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showSIAField ? 'bg-[#2E3350]' : 'bg-gray-300'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showSIAField ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
                <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">
                  Apply for Job
                </label>
              </div>

              {/* SIA Number Field (conditionally rendered) */}
              {/* SIA Number Field */}
{showSIAField && (
  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
    <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">
      SIA Number
    </label>
    <input
      type="text"
      name="sia_number"
      className="w-full border-b-2 border-gray-200 focus:border-[#2E3350] outline-none py-2 font-montserrat transition-colors bg-transparent text-[#2E3350]"
      placeholder="E.G. 1234567890123456"
    />
  </div>
)}

             {/* Message */}
<div className="space-y-2">
  <label className="font-agency text-sm text-[#2E3350] tracking-widest uppercase font-bold">
    Message
  </label>
  <textarea
    name="message"
    required
    rows={4}
    className="w-full border-b-2 border-gray-200 focus:border-[#2E3350] outline-none py-2 font-montserrat transition-colors bg-transparent resize-none text-[#2E3350]"
    placeholder={
      showSIAField
        ? "I AM APPLYING FOR THE SECURITY OFFICER ROLE. I HAVE VALID SIA LICENSE AND EXPERIENCE IN..."
        : "HOW CAN WE HELP YOU?"
    }
  />
</div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2E3350] text-white font-agency md:text-2xl py-5 flex items-center justify-center gap-3 hover:bg-[#E9A07D] transition-all group disabled:opacity-50 tracking-[0.2em]"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {status === "success" && (
                <p className="text-green-600 font-montserrat text-sm text-center font-bold animate-pulse">Your message has been sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-montserrat text-sm text-center font-bold">Something went wrong. Please check your credentials.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};