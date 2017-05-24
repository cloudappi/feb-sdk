'use strict'

const FEB = require('../../');
const expect = require('chai').expect;

describe('FEB SDK', () => {
  let feb;
  beforeEach(() => {
    feb = new FEB();
    feb.setCategoryId(14);
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

  it('should be able to retrieve all season categories');

  it('should be able to retrieve all category groups');

  it('should be able to retrieve all group rounds');

  it('should be able to retrieve the round games');
});
