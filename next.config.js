/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     fs: false,
    //   };
    // }
    return config;
  },
};

module.exports = nextConfig;
