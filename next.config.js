/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // false because stict mode now render every onMount useEffect twice for some reason.. This messes up my AudioPlayer
};

module.exports = nextConfig;
