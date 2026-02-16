import Image from 'next/image';

export default function About() {
    return (
        <section className="relative min-h-screen mt-10 mb-0 w-full flex items-center overflow-hidden max-lg:border-t-2 max-lg:border-b-2 max-lg:border-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/new/SVG-about-us-page.png"
                    alt="Security Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Logo Watermark */}
            <div className="absolute inset-0 z-100 flex items-center justify-center pointer-events-none">
                <div className="relative w-[120%] h-[120%] opacity-[0.19]">
                    <Image
                        src="/assets/SVG_Asset-11-cropped.svg"
                        alt="Logo Watermark"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative ml-8 z-20 grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
                {/* Left Column: Text with Semi-Transparent Overlay */}
                <div className="bg-white/70 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center text-[#151E33]">
                    <h1 className="font-agency text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-8">
                        professional security company covering the uk
                    </h1>

                    <div className="font-montserrat space-y-6 text-sm md:text-base leading-relaxed max-w-xl">
                        <p>
                            Secure Services is a leading security company in Sheffield providing professional
                            and reliable security services across South Yorkshire and the UK. Based at
                            Suite F14, Epic House, Darnel Road, Sheffield, we deliver trusted protection solutions for
                            businesses, construction sites, retail premises, private clients and events.
                        </p>

                        <p>
                            Our core services include Manned Guarding, Event Security, K9 Dog Handling,
                            Construction Site Security, and Retail & Commercial Security.
                        </p>

                        <p>Our specialist security services in sheffield include:</p>

                        <ul className="space-y-1 list-none">
                            <li>Manned Guarding Services in Sheffield</li>
                            <li>Event Security in Sheffield</li>
                            <li>K9 Dog Handling & Security Dog Services</li>
                            <li>Construction Site Security</li>
                            <li>Retail & Commercial Security</li>
                        </ul>

                        <p>
                            With experienced SIA-licensed security officers, 24/7 operational support,
                            and a strong local presence, Secure Services ensures professional protection
                            tailored to your needs.
                        </p>
                    </div>
                </div>

                {/* Right Column: Empty (image is in background) */}
                <div className="relative hidden md:block">
                    {/* Empty - the security guard image shows through from background */}
                </div>
            </div>
        </section>
    );
}