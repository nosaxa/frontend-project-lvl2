import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormattedOutput = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      console.error(`Unknown format: ${formatName}`);
      return makeStylish(tree);
  }
};

export default makeFormattedOutput;
