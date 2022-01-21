import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormattedOutput = (tree, formatName) => {
  if (formatName === 'stylish') {
    return makeStylish(tree);
  }

  if (formatName === 'plain') {
    return makePlain(tree);
  }

  if (formatName === 'json') {
    return JSON.stringify(tree);
  }
  return null;
};

export default makeFormattedOutput;
