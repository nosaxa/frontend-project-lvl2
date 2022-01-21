import path from 'path';
import * as fs from 'fs';
import parseFile from './parser.js';
import buildDiffTree from './buildDiffTree.js';
import makeFormattedOutput from './formatters/index.js';

const getExtension = (filePath) => path.extname(filePath).slice(1);

const compareFiles = (path1, path2, format = 'stylish') => {
  const fileContent1 = fs.readFileSync(path1, 'utf8');
  const fileContent2 = fs.readFileSync(path2, 'utf8');

  const obj1 = parseFile(fileContent1, getExtension(path1));
  const obj2 = parseFile(fileContent2, getExtension(path2));

  const tree = buildDiffTree(obj1, obj2);

  const result = makeFormattedOutput(tree, format);

  return result;
};

export default compareFiles;
