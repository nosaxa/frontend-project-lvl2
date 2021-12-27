#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import * as fs from 'fs';
import _ from 'lodash';
import path from 'path';

const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = [...keys1, ...keys2];

  const cb = (acc, key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      acc[`  ${key}`] = obj1[key];
    } else {
      if (_.has(obj1, key)) {
        acc[`- ${key}`] = obj1[key];
      }
      if (_.has(obj2, key)) {
        acc[`+ ${key}`] = obj2[key];
      }
    }

    return acc;
  };

  const resultObj = keys.reduce(cb, {});

  const result = JSON.stringify(resultObj, null, '  ')
    .split('"')
    .join('')
    .split(',')
    .join('');

  console.log(result);
};

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  const file1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf8');
  const file2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf8');

  const file1Obj = JSON.parse(file1);
  const file2Obj = JSON.parse(file2);

  genDiff(file1Obj, file2Obj);
});

program.parse(process.argv);

export default genDiff;
