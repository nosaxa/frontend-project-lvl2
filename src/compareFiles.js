import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import parseFile from './parser.js';
import buildDiffTree from './buildDiffTree.js';
import makeFormattedOutput from './formatters/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', fileName);
  return fixturePath;
};

const getExtension = (filePath) => path.extname(filePath).slice(1);

const compareFiles = (file1, file2, format = 'stylish') => {
  const fileContent1 = fs.readFileSync(getFixturePath(file1));
  const fileContent2 = fs.readFileSync(getFixturePath(file2));

  const obj1 = parseFile(fileContent1, getExtension(file1));
  const obj2 = parseFile(fileContent2, getExtension(file2));

  const tree = buildDiffTree(obj1, obj2);

  const result = makeFormattedOutput(tree, format);

  return result;
};

export default compareFiles;
