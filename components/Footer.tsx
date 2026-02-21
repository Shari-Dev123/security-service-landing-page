"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface FooterProps {
  home?: boolean;
  services?: boolean;
  about?: boolean;
}

export const Footer = ({ home, services, about }: FooterProps) => {
    const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <div className={`bg-cover relative z-10 bg-center ${home ? "-mt-14" : ''} bg-no-repeat overflow-visible border-t-0 border-white ${home ? '' : ''}`}>



      <footer style={{ backgroundImage: "url('/assets/removed-cut.svg')" }} className="relative z-10  bg-center bg-cover bg-no-repeat opacity-90 pt-20 pb-12 px-6 overflow-visible">
        <div className="absolute inset-0 opacity-50 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start space-y-4 overflow-visible">
  <div className="overflow-visible flex items-center justify-center lg:justify-start">
    {
      isMobile ? (
        <div className="flex flex-col items-center gap-0">
            <Image
              src="/assets/new/logo-1.svg"
              alt="Logo"
              width={0}
              height={0}
              className="object-contain
                w-[130px] h-[95px] 
                min-[375px]:w-[155px] min-[375px]:h-[115px] 
                min-[430px]:w-[175px] min-[430px]:h-[130px] 
                sm:w-[240px] sm:h-[175px] 
                md:w-[290px] md:h-[215px] 
                lg:w-[500px] lg:h-[40vh]
                max-w-[calc(55vw-20px)]"
            />
        
            <div className="flex flex-col items-center leading-none -mt-1 sm:-mt-2">
              <span className="text-white uppercase font-agency tracking-wide
                text-[18px] min-[375px]:text-[21px] min-[430px]:text-[24px]
                sm:text-[32px] md:text-[38px] lg:text-[52px]">
                Secure Services
              </span>
              <span className="text-white uppercase font-agency tracking-[0.14em]
                text-[8px] min-[375px]:text-[9.5px] min-[430px]:text-[11px]
                sm:text-[15px] md:text-[18px] lg:text-[24px]">
                Your Safety — Our Priority
              </span>
            </div>
          </div>
      ) : (
         <Image
      src="/assets/new/Secure-services-logo-Artboard-5-cropped.svg"
      alt="Secure Services Logo"
      width={500}
      height={500}
      className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[224px] lg:h-[224px] object-contain flex-shrink-0"
    />
      )
    }
   
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
                { Icon: "/assets/facebook-svgrepo.svg", link: "https://www.facebook.com/profile.php?id=61588384584179" },
                { Icon: "/assets/instagram-svgrepo.svg", link: "https://www.instagram.com/ss_secureservices?igsh=MTh4ZDAxZ2ZsN2twaw%3D%3D" },
                { Icon: "/assets/linkedin-svgrepo-1.svg", link: "https://www.linkedin.com/in/secure-services-4b22aa3b0" },
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

      </footer>
    </div>
  );
};