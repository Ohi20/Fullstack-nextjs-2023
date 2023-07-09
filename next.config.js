/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'images.pexels.com',
//       'cdn.pixabay.com',
//       'www.digitalvidya.com',
//       'www.freepik.com/',
//       'www.tailorbrands.com',
//       'www.textbroker.com',
//       'blog.puls.com',
//       'www.freepik.com',
//       'https://www.tailorbrands.com/wp-content/uploads/2021/05/Header_Personal_Branding.jpeg',
//     ],
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
