'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');

describe('feb.getSecurityFormValues', () => {
  const FEB = injectToFeb({});

  const securityFormValuesMock = {
    __EVENTTARGET: 'a',
    __EVENTARGUMENT: 'b',
    __EVENTVALIDATION: 'c',
    __LASTFOCUS: 'd',
    __VIEWSTATE: 'e',
    __VIEWSTATEGENERATOR: 'f'
  };

  let getSecurityFormValues;
  let context;
  beforeEach(() => {
    context = {
      _securityFormValues: null,
      _getInitialPageHTML: sinon.stub().resolves(),
      _extractSecurityFormValues: sinon.stub().resolves(securityFormValuesMock),
    };
    getSecurityFormValues = FEB.prototype._getSecurityFormValues.bind(context);
  });

  it('should exists', () => {
    expect(getSecurityFormValues).to.exist;
  });

  it('should return the formValues if they are available', async () => {
    const context = {
      _securityFormValues: securityFormValuesMock
    };
    getSecurityFormValues = FEB.prototype._getSecurityFormValues.bind(context);
    const formValues = await getSecurityFormValues();

    expect(formValues.__EVENTTARGET).to.exists;
    expect(formValues.__EVENTTARGET).to.equal(securityFormValuesMock.__EVENTTARGET);
    expect(formValues.__EVENTARGUMENT).to.exists;
    expect(formValues.__EVENTARGUMENT).to.equal(securityFormValuesMock.__EVENTARGUMENT);
    expect(formValues.__LASTFOCUS).to.exists;
    expect(formValues.__LASTFOCUS).to.equal(securityFormValuesMock.__LASTFOCUS);
    expect(formValues.__VIEWSTATE).to.exists;
    expect(formValues.__VIEWSTATE).to.equal(securityFormValuesMock.__VIEWSTATE);
    expect(formValues.__VIEWSTATEGENERATOR).to.exists;
    expect(formValues.__VIEWSTATEGENERATOR).to.equal(securityFormValuesMock.__VIEWSTATEGENERATOR);
    expect(formValues.__EVENTVALIDATION).to.exists;
    expect(formValues.__EVENTVALIDATION).to.equal(securityFormValuesMock.__EVENTVALIDATION);
  });

  it('should call getInitialPageHTML and extractSecurityFormValues if they are not available', async () => {
    const formValues = await getSecurityFormValues();

    expect(context._getInitialPageHTML.calledOnce).to.be.true;
    expect(context._extractSecurityFormValues.calledOnce).to.be.true;

    expect(formValues.__EVENTTARGET).to.exists;
    expect(formValues.__EVENTTARGET).to.equal(securityFormValuesMock.__EVENTTARGET);
    expect(formValues.__EVENTARGUMENT).to.exists;
    expect(formValues.__EVENTARGUMENT).to.equal(securityFormValuesMock.__EVENTARGUMENT);
    expect(formValues.__LASTFOCUS).to.exists;
    expect(formValues.__LASTFOCUS).to.equal(securityFormValuesMock.__LASTFOCUS);
    expect(formValues.__VIEWSTATE).to.exists;
    expect(formValues.__VIEWSTATE).to.equal(securityFormValuesMock.__VIEWSTATE);
    expect(formValues.__VIEWSTATEGENERATOR).to.exists;
    expect(formValues.__VIEWSTATEGENERATOR).to.equal(securityFormValuesMock.__VIEWSTATEGENERATOR);
    expect(formValues.__EVENTVALIDATION).to.exists;
    expect(formValues.__EVENTVALIDATION).to.equal(securityFormValuesMock.__EVENTVALIDATION);
  });
});
