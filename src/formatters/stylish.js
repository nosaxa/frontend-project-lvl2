import _ from 'lodash';

const BASE_INDENT = 4;

const calculateIndent = (depth, indent, sliceNumber = 0) => {
  const result = ' '.repeat(indent * depth + 2).slice(sliceNumber);
  return result;
};

const stringify = (value, spacesCount) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return currentValue;
    }

    const indentSize = depth + 2;
    const currentIndent = calculateIndent(indentSize, BASE_INDENT, 2);
    const bracketIndent = calculateIndent(indentSize - 1, BASE_INDENT, 2);
    const lines = Object.entries(currentValue).map(
      ([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`,
    );

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, spacesCount);
};

export default (tree) => {
  const iter = (currentValue, depth) => {
    const indent = calculateIndent(depth, BASE_INDENT);
    const bracketIndent = calculateIndent(depth, BASE_INDENT, 2);
    const lines = currentValue.map((line) => {
      switch (line.status) {
        case 'added':
          return [`${indent}+ ${line.key}: ${stringify(line.value, depth)}`];
        case 'deleted':
          return [`${indent}- ${line.key}: ${stringify(line.value, depth)}`];
        case 'changed':
          return [
            `${indent}- ${line.key}: ${stringify(
              line.oldValue,
              depth,
            )}\n${indent}+ ${line.key}: ${stringify(line.newValue, depth)}`,
          ];
        case 'unchanged':
          return [`${indent}  ${line.key}: ${stringify(line.value, depth)}`];
        case 'nested':
          return [`${indent}  ${line.key}: ${iter(line.children, depth + 1)}`];
        default:
          throw new Error(`Wrong type: ${line.status}`);
      }
    });

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(tree, 0);
};
