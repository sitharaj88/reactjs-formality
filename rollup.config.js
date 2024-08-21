import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
  input: 'src/index.ts', // Entry point for your library
  output: [
    {
      file: pkg.main, // CommonJS output
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module, // ES module output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically externalize peerDependencies
    resolve(), // Resolve node_modules dependencies
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: [ 
    'react',
    'react-dom',
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
