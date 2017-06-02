'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb.getSeasons', () => {
  let FEB;
  let context;
  let getSeasons;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      _request: sinon.stub().resolves(resultadosPage.html)
    };
    getSeasons = FEB.prototype.getSeasons.bind(context);
  });

  it('should request the proper body', () => {
    getSeasons();
    expect(context._request.calledOnce).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.equal(undefined);
  });

  it('should return the list of seasons', async () => {
    const seasons = await getSeasons();
    const expectedSeasons = resultadosPage.seasons;
    seasons.forEach((season, index) => {
      expect(season.id).to.exist;
      expect(season.id).to.equal(expectedSeasons[index].id);
      expect(season.title).to.exist;
      expect(season.title).to.equal(expectedSeasons[index].title);
    });
  });
});
