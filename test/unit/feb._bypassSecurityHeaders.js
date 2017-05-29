'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');

describe('feb.getSecurityHeaders', () => {
  const FEB = injectToFeb(http);

  let getSecurityHeaders;
  let resMock;
  beforeEach(() => {
    context = {
      competitionId
    };
    byPassSecurityHeaders = FEB.prototype._getSecurityHeaders.bind(context);
  });

  it('should exists', () => {
    expect(getSecurityHeaders).to.exist;
  });

  it('should insert nothing if no security headers available', async () => {
    const headers = await getSecurityHeaders();
    expect(Object.keys(headers).length).to.equal(0);
  });

  it('should insert security headers if they are available', async () => {
    const context = {
      _securityHeaders: {

      }
    };
    const headers = await getSecurityHeaders();
    expect(headers.__EVENTTARGET).to.exists;
    expect(headers.__EVENTTARGET).to.equal('');
    expect(headers.__EVENTARGUMENT).to.exists;
    expect(headers.__EVENTARGUMENT).to.equal('');
    expect(headers.__LASTFOCUS).to.exists;
    expect(headers.__VIEWSTATE).to.exists;
    expect(headers.__VIEWSTATEGENERATOR).to.exists;
    expect(headers.__EVENTVALIDATION).to.exists;

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
    const promise = getSecurityHeaders(data);

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
