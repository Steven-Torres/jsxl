#!/usr/bin/env node
import { transformFileSync } from '@babel/core';
import fs from 'fs';
import path from 'path';

const entryFile = path.resolve(process.cwd(), process.argv[2]);

const transformed = transformFileSync(entryFile, {
	plugins: [
		[
			'@babel/plugin-transform-react-jsx',
			{
				runtime: 'automatic',
				importSource: '@jsxl/runtime/build',
			},
		],
	],
});

const outFile = path.resolve(process.cwd(), 'jsx.js');

if (transformed && transformed.code) {
	fs.writeFileSync(outFile, transformed.code);
}
