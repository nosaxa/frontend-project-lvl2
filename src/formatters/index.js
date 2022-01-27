import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormattedOutput = (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Unknown format ${formatName}`);
  }
};

export default makeFormattedOutput;
