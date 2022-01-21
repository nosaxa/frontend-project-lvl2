import { test, expect, beforeAll } from '@jest/globals';
import fs from 'fs';
import getFixturePath from '../src/getFixturePath.js';
import compareFiles from '../src/compareFiles.js';

let expectedDataStylish;
let expectedDataPlain;
let expectedDataJson;

beforeAll(() => {
  expectedDataStylish = fs.readFileSync(getFixturePath('output.txt'), 'utf8');
  expectedDataJson = fs.readFileSync(getFixturePath('outputJson.txt'), 'utf8');
  expectedDataPlain = fs.readFileSync(
    getFixturePath('outputPlain.txt'),
    'utf8',
  );
});

test('compare json files (default output): ', () => {
  const actual = compareFiles('file1.json', 'file2.json');
  const expected = expectedDataStylish;

  expect(actual).toBe(expected);
});

test('compare yaml files (plain output): ', () => {
  const actual = compareFiles('file1.yaml', 'file2.yaml', 'plain');
  const expected = expectedDataPlain;

  expect(actual).toBe(expected);
});

test('compare json file with yaml file (json output): ', () => {
  const actual = compareFiles('file1.json', 'file2.yaml', 'json');
  const expected = expectedDataJson;

  expect(actual).toBe(expected);
});
