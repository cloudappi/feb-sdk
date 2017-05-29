'use strict';

const http = require('request-promise-native');

const injectToFeb = require('./feb');

module.exports = {
  FEB: injectToFeb(http)
};
