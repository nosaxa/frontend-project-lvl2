import _ from 'lodash';

const INDENT_SIZE = 2;
const BASE_INDENT = 4;
const CLOSE_INDENT = 2;

const makeIndent = (n) => ' '.repeat(n);

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) return data;

  const currentIndent = depth + INDENT_SIZE * BASE_INDENT;
  const closeIndent = INDENT_SIZE * CLOSE_INDENT;

  const lines = Object.entries(data).map(([key, value]) => {
    if (_.isPlainObject(value)) {
      return `${makeIndent(currentIndent)}${key}: ${stringify(
        value,
        depth + closeIndent,
      )}`;
    }
    return `${makeIndent(currentIndent)}${key}: ${value}`;
  });

  return ['{', ...lines, `${makeIndent(depth + closeIndent)}}`].join('\n');
};

export default (tree) => {
  const iter = (currentValue, depth) => {
    const lines = currentValue.map((line) => {
      switch (line.status) {
        case 'added':
          return `${makeIndent(depth + INDENT_SIZE)}+ ${line.key}: ${stringify(
            line.value,
            depth,
          )}`;
        case 'deleted':
          return `${makeIndent(depth + INDENT_SIZE)}- ${line.key}: ${stringify(
            line.value,
            depth,
          )}`;
        case 'changed':
          return `${makeIndent(depth + INDENT_SIZE)}- ${line.key}: ${stringify(
            line.oldValue,
            depth,
          )}\n${makeIndent(depth + INDENT_SIZE)}+ ${line.key}: ${stringify(
            line.newValue,
            depth,
          )}`;
        case 'unchanged':
          return `${makeIndent(depth + INDENT_SIZE)}  ${line.key}: ${stringify(
            line.value,
            depth,
          )}`;
        case 'nested':
          return `${makeIndent(depth + INDENT_SIZE)}  ${line.key}: ${iter(
            line.children,
            depth + INDENT_SIZE * 2,
          )}`;
        default:
          throw new Error(`Wrong type ${line.status}`);
      }
    });
    return ['{', ...lines, `${makeIndent(depth)}}`].join('\n');
  };
  return iter(tree, 0);
};
