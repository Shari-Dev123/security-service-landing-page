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
  title: "Secure Services | Your Safety - Our Priority",
  description: "Professional security services providing 24/7 protection, mobile guarding, and in-house monitoring for your safety and peace of mind.",
  openGraph: {
    title: "Secure Services | Professional Security",
    description: "Your safety is our priority. Expert security solutions for your business and home.",
    images: ["/assets/only-logo-cropped.png"],
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
