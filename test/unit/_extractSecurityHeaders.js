'use strict';

const expect = require('chai').expect;

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb._extractSecurityFormValues', () => {
  const FEB = injectToFeb({});
  const _extractSecurityFormValues = FEB.prototype._extractSecurityFormValues;

  it('should return the headers', async () => {
    const headers = await _extractSecurityFormValues(resultadosPage.html);
    const expectedHeaders = resultadosPage.securityHeaders;
    Object.keys(headers).forEach((name) => {
      expect(headers[name]).to.equal(expectedHeaders[name]);
    });
  });
});
