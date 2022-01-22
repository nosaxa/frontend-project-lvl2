import yaml from 'js-yaml';

const parseFile = (data, ext) => {
  if (ext === 'json') {
    return JSON.parse(data);
  }

  if (ext === 'yaml' || ext === 'yml') {
    return yaml.load(data);
  }

  return new Error('Invalid extension');
};

export default parseFile;
