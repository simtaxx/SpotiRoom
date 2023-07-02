/** @type {import('next').NextConfig} */
console.log()
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**"
          },
        ]
    }
}

module.exports = nextConfig
