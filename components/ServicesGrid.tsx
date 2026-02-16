'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// --- Types ---
interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
}
const backgroundPositions: Record<number, string> = {
    1: "5% 40%",
    2: "10% 70%",
    5: "30% 60%",
    6: "50% 50%",
    9: "0% 100%",
    10: "50% 100%",
};
// --- Sample Data ---
const servicesData: Service[] = [
    {
        id: '01',
        title: 'MANNED GUARDING',
        description: 'WE PROVIDE TRUSTWORTHY, RELIABLE AND PROFESSIONAL MANNED GUARDING SERVICES ACROSS THE UK',
        imageUrl: '/assets/service-1.jpg',
        ctaText: 'Explore Strategy',
        ctaLink: '/services/strategy',
    },
    {
        id: '02',
        title: 'EVENT SECURITY',
        description: 'OUR EXPERIENCED EVENT SECURITY OFFICERS ARE TRAINED IN CROWD CONTROL, EMERGENCY RESPONSE AND ACCESS MANAGEMENT, PROVIDING A CALM PROFESSIONAL PRESENCE THAT ENHANCES BOTH SAFETY AND EXPERIENCE',
        imageUrl: '/assets/service-2.jpg',
        ctaText: 'View Solutions',
        ctaLink: '/services/digital',
    },
    {
        id: '03',
        title: 'DOG HANDLING/K9',
        description: 'OUR PROFESSIONALLY TRAINED K9 UNITS ARE A POWERFUL DETERRENT AGAINST INTRUDERS, PROVIDING ADVANCED DETECTION AND RAPID RESPONSE CAPABILITIES',
        imageUrl: '/assets/service-3.jpg',
        ctaText: 'See Portfolio',
        ctaLink: '/services/branding',
    },
    {
        id: '04',
        title: 'MOBILE PATROLS',
        description: 'OUR MOBILE PATROL SECURITY SERVICES INCLUDE REGULAR INSPECTIONS OF ACCESS POINTS, PERIMETER FENCING, LIGHTING, AND INTERNAL/EXTERNAL AREAS. WITH RAPID ALARM RESPONSE AND SIA LICENSED OFFICERS, WE PROVIDE RELIABLE 24/7 PROTECTION ACROSS SHEFFIELD AND THE UK',
        imageUrl: '/assets/new/CAR-WITH-LOGO.png',
        ctaText: 'Analyze Growth',
        ctaLink: '/services/analytics',
    },
    {
        id: '05',
        title: 'KEY HOLDINGS',
        description: 'OUR PROFESSIONAL KEY HOLDING SECURITY SERVICES PROVIDE SECURE KEY MANAGEMENT AND FAST ALARM RESPONSE FOR COMMERCIAL PROPERTIES, OFFICES, RETAIL PREMISES, AND CONSTRUCTION SITES. WITH 24/7 SUPPORT FROM SIA-LICENSED SECURITY OFFICERS, WE DELIVER RELIABLE KEY HOLDING AND EMERGENCY RESPONSE SERVICES ACROSS SHEFFIELD AND THE UK',
        imageUrl: '/assets/BUILDING_WITH_LOGO.png',
        ctaText: 'Start Building',
        ctaLink: '/services/product',
    },
    {
        id: '06',
        title: 'CCTV CAMERAS',
        description: 'OUR PROFESSIONAL CCTV SECURITY CAMERA SERVICES PROVIDE 24/7 SURVEILLANCE AND EFFECTIVE CRIME DETERRENCE FOR BUSINESSES AND COMMERCIAL PROPERTIES ACROSS SHEFFIELD AND THE UK',
        imageUrl: '/assets/service-6.jpg',
        ctaText: 'Go Cloud',
        ctaLink: '/services/cloud',
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="w-full pt-20 pb-10 bg-[#ECEDF0] -mt-5 -mb-8">
            <div className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense auto-rows-fr">
                    {servicesData.map((service, index) => {
                        const isEvenRow = index % 2 === 0;

                        return (
                            <div key={service.id} className="contents group">
                                {/* IMAGE BOX */}
                                <div
                                    className={`
                    relative w-full h-[450px] lg:h-[600px] overflow-hidden
                    ${isEvenRow ? 'md:col-start-1' : 'md:col-start-2'}
                  `}
                                >
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                <div
                                    className={`
                    bg-[#F8B178]/15
                    relative flex items-center justify-center p-6 md:p-0
                    h-[450px] lg:h-[600px] w-full z-10
                    ${isEvenRow ? 'md:col-start-2' : 'md:col-start-1'}
                  `}

                                >
                                    <div
                                        className="absolute inset-0 -z-10 opacity-5 bg-no-repeat"
                                        style={{
                                            backgroundImage: "url('/assets/nav-logo-cropped.svg')",
                                            backgroundSize: "180%",
                                            backgroundPosition: backgroundPositions[index] || "0% 0%",
                                        }}
                                    />


                                    <div
                                        className={`
                        background-transparent
                      relative md:absolute z-100 bg-transparent pl-5 md:pl-10 xl:pl-20
                      shadow-xl border-4 border-white
                      w-full md:w-[110%] h-[83%] md:h-[65%] max-w-[550px] md:max-w-none
                      flex flex-col justify-center
                      transition-transform duration-500
                      ${isEvenRow
                                                ? 'md:-translate-x-[10%] md:left-0'
                                                : 'md:translate-x-[10%] md:right-0'
                                            }
                    `}
                                    >

                                        <h3 className="text-xl leading-[128%] md:text-3xl pl-10 lg:text-5xl font-agency font-medium text-[#151E33] mb-6">
                                            {service.title}
                                        </h3>

                                        <p className="text-[#151E33] text-xs md:text-sm font-montserrat lg:text-lg pl-10 mb-8 leading-relaxed max-w-[90%]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}