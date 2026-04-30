/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["covers.openlibrary.org"],
  },
};

export default nextConfig;