import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import transformPathsModule from 'typescript-transform-paths';

const transformPaths = transformPathsModule.default ?? transformPathsModule;
import packageJson from './package.json' with {type: 'json'};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      transformers: {
        before: [
          {type: 'program', factory: (program) => transformPaths(program)},
        ],
        afterDeclarations: [
          {type: 'program', factory: (program) => transformPaths(program, {afterDeclarations: true})},
        ],
      },
    }),
  ],
};
