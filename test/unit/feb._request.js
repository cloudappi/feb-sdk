'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');

describe('feb._request', () => {
  const competitionId = 14;
  const html = '<html><body>It works!</body></html>';
  const securityFormValuesMock = {
    __EVENTTARGET: 'a',
    __EVENTARGUMENT: 'b',
    __EVENTVALIDATION: 'c',
    __LASTFOCUS: 'd',
    __VIEWSTATE: 'e',
    __VIEWSTATEGENERATOR: 'f'
  };
  const updatedSecurityFormValuesMock = {
    __EVENTTARGET: 'g',
    __EVENTARGUMENT: 'h',
    __EVENTVALIDATION: 'i',
    __LASTFOCUS: 'j',
    __VIEWSTATE: 'k',
    __VIEWSTATEGENERATOR: 'l'
  };

  let http;
  let _request;
  beforeEach(() => {
    http = sinon.stub().resolves(html);
    const FEB = injectToFeb(http);
    const feb = new FEB();

    context = {
      competitionId,
      _getSecurityFormValues: sinon.stub().resolves(securityFormValuesMock),
      _extractSecurityFormValues: sinon.stub().returns(updatedSecurityFormValuesMock)
    };
    _request = feb._request.bind(context);
  });

  it('should exists', () => {
    expect(_request).to.exist;
  });

  it('should return a promise', () => {
    expect(_request()).to.be.an.instanceOf(Promise);
  });

  it('should POST the provided params to the URI bypassing security', async () => {
    const params = { a: 1, b: 2 };

    const result = await _request(params);

    expect(context._getSecurityFormValues.calledOnce).to.be.true;
    expect(http.calledOnce).to.be.true;

    const options  = http.getCall(0).args[0];
    expect(options.method).to.equal('POST');
    expect(options.uri).to.equal('http://competiciones.feb.es/autonomicas/Resultados.aspx?a=' + competitionId);

    Object.keys(params).forEach((property) => {
      expect(params[property]).to.equal(options.formData[property]);
    });

    Object.keys(securityFormValuesMock).forEach((property) => {
      expect(securityFormValuesMock[property]).to.equal(options.formData[property]);
    });

    expect(result).to.equal(html);
  });

  it('should update the security form values', async () => {
    const params = { a: 1, b: 2 };

    await _request(params);

    Object.keys(updatedSecurityFormValuesMock).forEach((property) => {
      expect(updatedSecurityFormValuesMock[property]).to.equal(context._securityFormValues[property]);
    });
  });
});
