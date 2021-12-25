#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import _ from 'lodash';
import * as fs from 'fs';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  const file1 = fs.readFileSync(filepath1, 'utf8');
  const file2 = fs.readFileSync(filepath2, 'utf8');

  const file1Obj = JSON.parse(file1);
  const file2Obj = JSON.parse(file2);

  console.log(file1Obj);
  console.log(file2Obj);
  console.log(`test lodash: has object proxy ${_.has(file1Obj, 'proxy')}`);
});

program.parse(process.argv);
