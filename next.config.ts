import type { NextConfig } from "next";

const repository = "coffee_menu";
const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
