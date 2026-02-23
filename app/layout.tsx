import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const agency = localFont({
  src: [
    {
      path: './fonts/agency-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/agency-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-agency',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: "Secure Services | Professional Security Solutions UK",
  description: "Secure Services provides expert security solutions including 24/7 manned guarding, mobile patrols, and surveillance for businesses and residential properties across the UK.",
  keywords: ["security services", "UK security", "manned guarding", "mobile patrols", "CCTV surveillance", "professional security provider"],
  icons: {
    icon: "/assets/nav-logo-cropped.svg",
    apple: "/assets/nav-logo-cropped.svg",
  },
  openGraph: {
    title: "Secure Services | Your Safety - Our Priority",
    description: "Professional security services providing 24/7 protection and peace of mind.",
    url: "https://secureservicesltd.co.uk",
    siteName: "Secure Services",
    images: [
      {
        url: "/assets/new/Secure-services-logo-Artboard-5-cropped.svg",
        width: 1200,
        height: 630,
        alt: "Secure Services Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Services | Professional Security",
    description: "24/7 protection and expert security solutions.",
    images: ["/assets/new/Secure-services-logo-Artboard-5-cropped.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${agency.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
