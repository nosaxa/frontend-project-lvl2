import * as fs from 'fs';
import getFixturePath from './getFixturePath.js';

const readFile = (fileName) => {
  const file = fs.readFileSync(getFixturePath(fileName), 'utf8');
  return file;
};

export default readFile;
