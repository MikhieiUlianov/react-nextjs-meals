import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // or higher as needed
    },
  },
};
module.exports = nextConfig;
export default nextConfig;
