import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.3", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      { source: "/marketing-services", destination: "https://agnidev.com", permanent: false },
      { source: "/it-services", destination: "https://agnidev.com", permanent: false },
    ];
  },
};

export default nextConfig;
