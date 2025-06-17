/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds (use with caution)
    ignoreBuildErrors: true,
  },
  // Optional: Add other optimizations
  images: {
    domains: ['localhost'],
    unoptimized: true, // If you're using static export
  },
}

module.exports = nextConfig