[![Actions Status](https://github.com/nosaxa/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/nosaxa/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/nosaxa/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7e227c8d4d08ebecacbd/test_coverage)](https://codeclimate.com/github/nosaxa/frontend-project-lvl2/test_coverage)

# Difference Generator
CLI app, which compares two configuration files and shows a difference.
The utility supports the following input data formats: json, yaml/yml. The output report can be generated in one of the following formats: stylish (default), plain, json.


## Installation
1. Clone this repository to your local machine:
 `git clone git@github.com:nosaxa/frontend-project-lvl2.git`
 
2. Install dependencies:
  `make install`
  
3. Publish the package locally:
   `make publish`
   
4. Install the package from local storage:
   `npm link`

## Usage

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
-V, --version        output the version number
-f, --format [type]  output format (default: "stylish")
-h, --help           display help for command
```

## Examples

### Comparison JSON files (default output)
[![asciicast](https://asciinema.org/a/sB2sPsAycjSVGN92uwowcyVpO.svg)](https://asciinema.org/a/sB2sPsAycjSVGN92uwowcyVpO)

### Comparison YAML files (plain output)
[![asciicast](https://asciinema.org/a/oTKV4jmr7An4zZYUw6uZReTgF.svg)](https://asciinema.org/a/oTKV4jmr7An4zZYUw6uZReTgF)
  
### Comparison YAML and JSON files (JSON output)
[![asciicast](https://asciinema.org/a/XLkLZvcRFToct7JorkW3GXTQF.svg)](https://asciinema.org/a/XLkLZvcRFToct7JorkW3GXTQF)
