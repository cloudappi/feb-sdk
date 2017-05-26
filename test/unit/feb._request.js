'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');

describe('feb._request', () => {
  const competitionId = 14;
  let http;
  let _request;
  let reqMock;
  let resMock;
  beforeEach(() => {
    reqMock = {
      write: sinon.spy(),
      end: sinon.spy()
    };
    http = {
      request: sinon.stub().returns(reqMock)
    };
    const FEB = injectToFeb(http);
    const feb = new FEB();
    context = {
      competitionId
    };
    _request = feb._request.bind(context);
  });

  it('should exists', () => {
    expect(_request).to.exist;
  });

  it('should return a promise', () => {
    expect(_request()).to.be.an.instanceOf(Promise);
  });

  it('should resolve the request the provided body with POST method and concat the reply', () => {
    const params = { a: 1, b: 2 };
    const promise = _request(params);

    expect(http.request.calledOnce).to.be.true;

    const options  = http.request.getCall(0).args[0];
    expect(options.host).to.equal('competiciones.feb.es');
    expect(options.path).to.equal('/autonomicas/Resultados.aspx?a=' + competitionId);
    expect(options.method).to.equal('POST');

    expect(reqMock.write.calledOnce).to.be.true;
    const body = qs.parse(reqMock.write.getCall(0).args[0]);
    expect(parseInt(body.a)).to.equal(params.a);
    expect(parseInt(body.b)).to.equal(params.b);
    expect(body.__EVENTTARGET).to.exists;
    expect(body.__EVENTTARGET).to.equal('');
    expect(body.__EVENTARGUMENT).to.exists;
    expect(body.__EVENTARGUMENT).to.equal('');
    expect(body.__LASTFOCUS).to.exists;
    expect(body.__VIEWSTATE).to.exists;
    expect(body.__VIEWSTATEGENERATOR).to.exists;
    expect(body.__EVENTVALIDATION).to.exists;

    expect(reqMock.end.calledOnce).to.be.true;

    const callback = http.request.getCall(0).args[1];
    const res = {
      handlers: {}
    };
    res.on = function(name, handler) {
      this.handlers[name] = handler;
    };
    callback(res);

    const html = '<html><body>It works!</body></html>';
    res.handlers.data(html.substr(0,15));
    res.handlers.data(html.substr(15,html.length));
    res.handlers.end();

    return promise.then(function(body) {
      expect(body).to.equal(html);
    });
  });

  it('should reject the request if something wrong happens', () => {
    const data = { a: 1, b: 2 };
    const promise = _request(data);

    const callback = http.request.getCall(0).args[1];
    const res = {
      handlers: {}
    };
    res.on = function(name, handler) {
      this.handlers[name] = handler;
    };
    callback(res);

    const resError = new Error('foobar');
    res.handlers.error(resError);

    return promise.catch(function(error) {
      expect(error).to.equal(resError);
    });
  });
});
