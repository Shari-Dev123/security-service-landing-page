"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  home?: boolean;
  services?: boolean;
  about?: boolean;
}

export const Footer = ({ home, services, about }: FooterProps) => {
  return (
    <div className={`bg-cover relative z-10 bg-center ${home ? "-mt-14" : ''} bg-no-repeat overflow-visible border-t-2 border-white ${home ? 'lg:[clip-path:polygon(0%_0%,44.5%_0%,50%_12%,55.5%_0%,100%_0%,100%_100%,0%_100%)]' : ''}`}>



      <footer style={{ backgroundImage: "url('/assets/removed-cut.svg')" }} className="relative z-10  bg-center bg-cover bg-no-repeat opacity-90 pt-20 pb-12 px-6 overflow-visible">
        <div className="absolute inset-0 opacity-50 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="relative w-56 h-56">
              <Image
                src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg"
                alt="Secure Services Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="font-agency text-3xl lg:text-4xl xl:text-6xl text-white mb-3 tracking-widest uppercase">
                Address
              </h3>
              <p className="font-agency text-lg mt-5 text-white/90 leading-tight uppercase max-w-fit">
                Suite F14, Epic House, Darnal Road, Sheffield, UK.
              </p>
            </div>

            {/* <div className="absolute w-full h-[1px] bg-white/20"></div> */}
            <span className="flex justify-center text-3xl items-center tracking-normal bg-black w-[65.27px] h-[65.26px]  font-montserrat text-[#F8B178] rounded-full">
              OR
            </span>

            <div className="text-center">
              <p className="font-agency text-2xl text-white tracking-widest uppercase">
                Call Us: +44 7519 300050
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-8">
            <button className="bg-white lg:ml-1 text-navy-dark font-agency text-lg xl:text-2xl px-8 py-2 rounded-full tracking-widest hover:bg-[#E9A07D] hover:text-white transition-all duration-300 uppercase">
              <a href="tel:+447519300050">Get In Touch</a>
            </button>

            <div className="flex gap-4">
              {[
                { Icon: "/assets/facebook-svgrepo.svg", link: "https://www.facebook.com/" },
                { Icon: "/assets/instagram-svgrepo.svg", link: "https://www.instagram.com/ss_secureservices?igsh=MTh4ZDAxZ2ZsN2twaw%3D%3D" },
                { Icon: "/assets/linkedin-svgrepo-1.svg", link: "https://www.linkedin.com/" },
                { Icon: "/assets/mail-svgrepo.svg", link: "mailto:nas@secureservicesltd.co.uk" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-white bg-white flex items-center justify-center text-white hover:bg-gray-200  hover:text-gray-700 transition-all"
                >
                  <Image src={social?.Icon} alt="Icon" width={24} height={24} className="hover:cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="relative mt-20 pt-8  text-center">
        <p className="font-montserrat text-[10px] text-white/40 tracking-widest uppercase">
          © 2026 Secure Services Ltd. All Rights Reserved.
        </p>
      </div> */}
      </footer>
    </div>
  );
};