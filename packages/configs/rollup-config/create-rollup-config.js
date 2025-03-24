/** @format */

import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default function (input, tsconfigPath = "./tsconfig.json") {
  return {
    input,
    output: [
      {
        dir: "dist",
        format: "esm",
      },
    ],
    plugins: [
      typescript({
        tsconfig: tsconfigPath,
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
}
