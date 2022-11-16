/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // false because stict mode now render every onMount useEffect twice for some reason.. This messes up my AudioPlayer
  images: {
    domains: [
      "theholymountain.net",
      "www.theholymountain.net",
      "m.theholymountain.net",
    ],
  },
  // env: {
  //   stripe_publishable_key: process.env.stripe_publishable_key,
  // },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: "http://localhost:4000/:path*",
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
