import _ from 'lodash';

const outputValue = (val) => {
  if (_.isPlainObject(val)) return '[complex value]';
  return typeof val === 'string' ? `'${val}'` : val;
};

const makePlain = (tree) => {
  const iter = (currentValue, path) => {
    const lines = currentValue
      .filter(({ status }) => status !== 'unchanged')
      .map(({ key, status, oldValue, newValue, children, value }) => {
        const keys = [...path, key];
        const property = keys.join('.');

        switch (status) {
          case 'added':
            return `Property '${property}' was added with value: ${outputValue(
              value,
            )}`;
          case 'deleted':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${outputValue(
              oldValue,
            )} to ${outputValue(newValue)}`;
          case 'nested':
            return iter(children, keys);
          default:
            return `Wrong status: ${status}`;
        }
      });

    return lines.join('\n');
  };
  return iter(tree, []);
};

export default makePlain;
