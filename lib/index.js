'use strict';

const http = require('http');

const injectToFeb = require('./feb');

module.exports = {
  FEB: injectToFeb(http)
};
