'use strict';

const expect = require('chai').expect;

const injectToFeb = require('../../lib/feb');

describe('FEB constructor', () => {
  let FEB;
  beforeEach(() => {
    FEB = injectToFeb({});
  });

  it('should be instantiable', () => {
    new FEB();
  });

  it('should be able to be constructed without new keyword', () => {
    const feb = FEB();
    expect(feb).to.be.an.instanceOf(FEB);
  });

  it('should accept competitionId in options parameter', () => {
    const competitionId = 3;
    const feb = FEB({ competitionId });
    expect(feb.competitionId).to.equal(competitionId);
  });
});
