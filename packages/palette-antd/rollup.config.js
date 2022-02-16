import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
  input: "./palette.tsx",
  output: [
    {
      file: packageJson.main,
      format: "es",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "commonjs",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true
    }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser()
  ]
};
