import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
