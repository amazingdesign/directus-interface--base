import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';

export default {
	input: 'src/index.ts',
	output: {
		format: 'es',
		file: 'dist/index.js',
	},
	plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    alias({
      entries: [
        { find: 'vue', replacement: './vue-alias.js' },
      ]
    }),
    terser(),
    resolve(),
    commonjs(),
    vue()
  ],
};