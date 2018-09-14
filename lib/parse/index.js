'use strict';

const groupParsers = require('./groups');

const parse = {};

parse.group = function parseGroup(originalGroup) {
  let result;
  let group = originalGroup.trim();

  const parserNames = Object.keys(groupParsers);
  for (let i = 0; i<parserNames.length; i++) {
    let groupParserName = parserNames[i];
    let groupParser = groupParsers[groupParserName];

    if (groupParser.matcher.test(group)) {
      result = groupParser.handler(group);
      result.matchedBy = groupParserName;
      break;
    };
  }

  return result;
}

parse.category = function parseCategory(category) {
  return category;
};

module.exports = parse;
