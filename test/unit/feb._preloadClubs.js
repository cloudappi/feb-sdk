'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');

describe('feb._preloadClubs', () => {
  const competitionId = 14;
  const categoryId = 13242;
  let FEB;
  let context;
  let _preloadClubs;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      competitionId,
      _request: sinon.stub().resolves()
    };
    _preloadClubs = FEB.prototype._preloadClubs.bind(context);
  });

  it('should request the proper body', async () => {
    await _preloadClubs(categoryId);

    expect(context._request.calledOnce).to.be.true;

    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({});

    const uri = context._request.getCall(0).args[1];
    const uriParameters = qs.parse(uri.split('?')[1]);
    expect(Object.keys(uriParameters)).to.have.lengthOf(3);
    expect(uriParameters.a).to.equal(competitionId.toString());
    expect(uriParameters.c).to.equal(categoryId.toString());
    expect(uriParameters.med).to.equal('0');

    const method = context._request.getCall(0).args[2];
    expect(method).to.equal('GET');
  });

});
