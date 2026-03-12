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
  output: 'export', // you already have this
  images: {
    unoptimized: true, // add this line
  },
};

export default nextConfig;