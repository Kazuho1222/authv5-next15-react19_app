import type { NextConfig } from "next";

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  /** WebPack の設定を追加 */
  webpack: (config) => {
    // Vue と同じように 「@ = src/」,「~ = src/」に設定する。
    // => モジュールのパス解決とエイリアスを設定している。
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
};

export default nextConfig;
