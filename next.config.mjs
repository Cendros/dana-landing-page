const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    assetPrefix: isProd ? '/dana-landing-page' : undefined
};

export default nextConfig;