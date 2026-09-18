import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { files: ["next-env.d.ts"], rules: { "@typescript-eslint/triple-slash-reference": "off" } },
];
export default config;
