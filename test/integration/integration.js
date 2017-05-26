'use strict'

const FEB = require('../../');
const expect = require('chai').expect;

describe.only('FEB SDK', () => {
  let feb;
  beforeEach(() => {
    feb = new FEB();
    feb.setCompetitionId(14);
  });

  it('should be able to retrieve all seasons', async () => {
    const reply = await feb.getSeasons();
    expect(reply).to.be.a('array');
    expect(reply).to.have.length.of.at.least(12);
    reply.forEach((season) => {
      expect(season).to.have.property('title');
      expect(season).to.have.property('id');
    });
  });

  it('should be able to retrieve all season categories', async () => {
    const reply = await feb.getCategories(2015);
    expect(reply).to.be.a('array');
    expect(reply).to.have.length.of.at.least(12);
    reply.forEach((season) => {
      expect(season).to.have.property('id');
      expect(season).to.have.property('title');
    });

    console.log((await feb.getCategories(2016))[0]);
    console.log((await feb.getCategories(2015))[0]);
    console.log((await feb.getCategories(2014))[0]);
  });

  it('should be able to retrieve all category groups');

  it('should be able to retrieve all group rounds');

  it('should be able to retrieve the round games');
});
