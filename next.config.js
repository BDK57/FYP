/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist'
,
    images: {
        domains: [
          "shadiyana-vendor-images.s3.ap-south-1.amazonaws.com",
          "assets.vogue.com",
          "m.media-amazon.com",
          "upload.wikimedia.org",
        ],
      },
}


module.exports = nextConfig
