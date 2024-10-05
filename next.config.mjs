import dotenv from 'dotenv';
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['iili.io'], // image hosting domains
    },
};

export default nextConfig;
