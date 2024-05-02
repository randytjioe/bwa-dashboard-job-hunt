/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otkgjrocurlkuubyiepp.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
