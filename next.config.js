/** @type {import('next').NextConfig} */
const nextConfig = {
  "rewrites": [
    {
      "source": "/suika",
      "destination": "https://suika.world/:path*"
    },
  ]
};

module.exports = nextConfig;
