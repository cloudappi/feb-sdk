'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');

describe('feb._getInitialPageHTML', () => {
  const competitionId = 14;
  const html = '<html><body>It works!</body></html>';

  let http;
  let _getInitialPageHTML;
  beforeEach(() => {
    http = sinon.stub().returns(html);
    const FEB = injectToFeb(http);
    const feb = new FEB();
    context = {
      competitionId
    };
    _getInitialPageHTML = feb._getInitialPageHTML.bind(context);
  });

  it('should exists', () => {
    expect(_getInitialPageHTML).to.exist;
  });

  it('should return a promise', () => {
    expect(_getInitialPageHTML()).to.be.an.instanceOf(Promise);
  });

  it('should send a GET request and concat the reply', async () => {
    const response = await _getInitialPageHTML();

    expect(http.calledOnce).to.be.true;

    const options  = http.getCall(0).args[0];
    expect(options.method).to.equal('GET');
    expect(options.uri).to.equal('http://competiciones.feb.es/autonomicas/Resultados.aspx?a=' + competitionId);

    expect(response).to.equal(html);
  });
});
