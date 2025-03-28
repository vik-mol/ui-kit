#!/usr/bin/env node

import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";


const args = process.argv.slice(2);
const inputArgIndex = args.indexOf("--input");
const input = inputArgIndex >= 0 ? args[inputArgIndex + 1] : null;

if (!input) {
  console.error("Error: --input argument is required.");
  process.exit(1);
}

const tsconfigPath = "./tsconfig.json";

const config = {
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

async function build() {
  const bundle = await rollup(config);
  await bundle.write(config.output[0]);

  console.log("Build completed.");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
