/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/portfolio",
    TOKEN: "ghtyufjdssdfjkdsfsftyhgrf",
  },
  async redirects() {
    return [
      {
        source: "/blogpost",
        destination: "https://akhilkala.com/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
