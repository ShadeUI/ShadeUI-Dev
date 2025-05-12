import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcssPostcss from '@tailwindcss/postcss';
import dts from "rollup-plugin-dts";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

const externalDeps = [
  ...Object.keys(packageJson.peerDependencies || {}),
];


export default [
  {
    input: "src/index.ts",
    output: [
      { file: packageJson.main, format: "cjs", sourcemap: true },
      { file: packageJson.module, format: "esm", sourcemap: true },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", declaration: false, declarationDir: null  }),
      postcss({
        plugins: [tailwindcssPostcss(), autoprefixer()],
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
    external: externalDeps,
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
    external: externalDeps,
  },
];
