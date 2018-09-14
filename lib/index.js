'use strict';

const http = require('request-promise-native');

const injectToFeb = require('./feb');
const parse = require('./parse');

module.exports = {
  FEB: injectToFeb(http),
  parse
};
