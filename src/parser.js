import yaml from 'js-yaml';

const parseFile = (data, ext) => {
  let parse;

  if (ext === 'json') {
    parse = JSON.parse;
  }

  if (ext === 'yaml' || ext === 'yml') {
    parse = yaml.load;
  }

  return parse(data);
};

export default parseFile;
