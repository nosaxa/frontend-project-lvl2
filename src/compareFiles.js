import _ from 'lodash';
import readFile from './readFile.js';

const parseFile = (file) => JSON.parse(file, null, '  ');

const compareFiles = (file1, file2) => {
  const obj1 = parseFile(readFile(file1));
  const obj2 = parseFile(readFile(file2));
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

  return result;
};

export default compareFiles;
