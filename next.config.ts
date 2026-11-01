import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old standalone pages are now sections of the home page
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/skills", destination: "/#stack", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/projects/:id", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
