'use strict';

const expect = require('chai').expect;

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb._extractSecurityFormValues', () => {
  const FEB = injectToFeb({});
  const _extractSecurityFormValues = FEB.prototype._extractSecurityFormValues;

  it('should return the form values', async () => {
    const values = await _extractSecurityFormValues(resultadosPage.html);
    const expectedValues = resultadosPage.formValues;
    Object.keys(values).forEach((name) => {
      expect(values[name]).to.equal(expectedValues[name]);
    });
  });
});
