import yaml from 'js-yaml';

const parseFile = (data, ext) => {
  switch (ext) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Invalid file extension: ${ext}`);
  }
};

export default parseFile;
