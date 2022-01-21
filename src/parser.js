import path from 'path';
import yaml from 'js-yaml';
import readFile from './readFile.js';

const getExtensionName = (file) => path.extname(file);

const parseFile = (file) => {
  const data = readFile(file);
  const format = getExtensionName(file);
  let parse;

  if (format === '.json') {
    parse = JSON.parse;
  }

  if (format === '.yaml' || format === '.yml') {
    parse = yaml.load;
  }

  return parse(data);
};

export default parseFile;
