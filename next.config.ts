// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };


// // export default nextConfig;

// import type { NextConfig } from "next";

// // Next.js config
// const nextConfig: NextConfig = {
//   // agar pehle kuch options hain, yahan add karo
//   output: "export", // ye line static export enable karti hai
// };

// export default nextConfig;

// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',      // ye batata hai Next.js ko: "Static HTML aur assets generate karo"
  images: {
    unoptimized: true,   // ye disable karta hai Next.js image optimization API ko
  },
  basePath: '',          // agar subfolder me host kar rahe ho
  assetPrefix: './',     // ye relative path ke liye
};
export default nextConfig;