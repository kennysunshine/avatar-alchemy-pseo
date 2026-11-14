import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Law Firms was removed from the industries list.
  async redirects() {
    return [{ source: "/legal", destination: "/", permanent: true }];
  },
};

export default nextConfig;
