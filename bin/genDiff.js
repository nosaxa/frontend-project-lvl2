#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import compareFiles from '../src/compareFiles.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  const { format } = program.opts();
  console.log(compareFiles(filepath1, filepath2, format));
});

program.parse(process.argv);
