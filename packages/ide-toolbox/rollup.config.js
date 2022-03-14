import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'es',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'commonjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve(),
    commonjs(),
    typescript({
      typescript: require('ttypescript'),
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            {transform: 'typescript-transform-paths'},
            {transform: 'typescript-transform-paths', afterDeclarations: true},
          ],
        },
      },
    }),
    postcss({
      extensions: ['.scss'],
      use: ['sass'],
    }),
  ],
};
