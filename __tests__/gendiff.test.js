import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import compareFiles from '../src/compareFiles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', fileName);
  return fixturePath;
};
const fixPath = '__fixtures__/';

const expectedDataStylish = fs.readFileSync(
  getFixturePath('output.txt'),
  'utf8',
);
const expectedDataJson = fs.readFileSync(
  getFixturePath('outputJson.txt'),
  'utf8',
);
const expectedDataPlain = fs.readFileSync(
  getFixturePath('outputPlain.txt'),
  'utf8',
);

test('compare json files (default output):', () => {
  const actual = compareFiles(`${fixPath}file1.json`, `${fixPath}file2.json`);
  const expected = expectedDataStylish;

  expect(actual).toBe(expected);
});

test('compare yaml files (plain output):', () => {
  const actual = compareFiles(
    `${fixPath}file1.yml`,
    `${fixPath}file2.yml`,
    'plain',
  );
  const expected = expectedDataPlain;

  expect(actual).toBe(expected);
});

test('compare json file with yml file (json output):', () => {
  const actual = compareFiles(
    `${fixPath}file1.yml`,
    `${fixPath}file2.json`,
    'json',
  );
  const expected = expectedDataJson;

  expect(actual).toBe(expected);
});
