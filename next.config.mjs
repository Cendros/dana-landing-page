const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    assetPrefix: isProd ? '/dana-landing-page' : undefined,
    images: {
        path: isProd ? 'http://ludovic.lahougue.caen.mds-project.fr/dana-landing-page/_next/image' : '/_next/image'
    }
};

export default nextConfig;