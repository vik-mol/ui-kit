/** @format */

import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      extensions: [".sass"],
      extract: true,
      minimize: true,
      sourceMap: true,
      modules: {
        generateScopedName: "[hash:base64:5]",
      },
    }),
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
};
