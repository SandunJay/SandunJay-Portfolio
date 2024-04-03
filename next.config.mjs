/** @type {import('next').NextConfig} */ 

const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  basePath: isProd ? "/SandunJay-Portfolio" : "",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
