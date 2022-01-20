import path from 'path';
import yaml from 'js-yaml';
import readFile from './readFile.js';

const getExtensionName = (file) => path.extname(file);

const parseFile = (file) => {
  const format = getExtensionName(file);

  if (format === '.json') {
    return JSON.parse(readFile(file), null, '  ');
  }

  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(file));
  }

  return null;
};

export default parseFile;
