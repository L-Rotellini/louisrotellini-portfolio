import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mentions-legale",
        destination: "/mentions-legales",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;