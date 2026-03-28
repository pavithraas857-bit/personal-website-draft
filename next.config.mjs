/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-website-draft',
  assetPrefix: '/personal-website-draft/',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
