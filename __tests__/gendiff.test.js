import { test, expect, beforeAll } from '@jest/globals';
import fs from 'fs';
import getFixturePath from '../src/getFixturePath.js';
import compareFiles from '../src/compareFiles.js';

let expectedData;

beforeAll(() => {
  expectedData = fs.readFileSync(getFixturePath('output.txt'), 'utf8');
});

test('🦜 compare json files:', () => {
  const actual = compareFiles('file1.json', 'file2.json');
  const expected = expectedData;

  expect(actual).toBe(expected);
});

test('🦖 compare yaml files:', () => {
  const actual = compareFiles('file1.yaml', 'file2.yaml');
  const expected = expectedData;

  expect(actual).toBe(expected);
});
