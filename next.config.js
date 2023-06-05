/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env:{
    API_URL:process.env.API_URL
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  }
}

module.exports = nextConfig
