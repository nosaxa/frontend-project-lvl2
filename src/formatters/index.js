import makeStylish from './stylish.js';
import makePlain from './plain.js';

const getFormat = (tree, formatName) => {
  if (formatName === 'stylish') {
    return makeStylish(tree);
  }

  if (formatName === 'plain') {
    return makePlain(tree);
  }

  if (formatName === 'json') {
    return JSON.stringify(tree, null, 2);
  }
  return null;
};

export default getFormat;
