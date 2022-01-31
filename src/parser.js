import yaml from 'js-yaml';

const parseFile = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Invalid file extension: ${format}`);
  }
};

export default parseFile;
