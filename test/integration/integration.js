'use strict';

const FEB = require('../../');
const expect = require('chai').expect;

describe('FEB SDK', () => {
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
    expect(reply).to.have.lengthOf(82);
    reply.forEach((category) => {
      expect(category).to.have.property('id');
      expect(category).to.have.property('title');
    });
  });

  it('should be able to retrieve all category groups', async() => {
    const reply = await feb.getGroups(2015, 12083);
    expect(reply).to.be.a('array');
    expect(reply).to.have.length.of.at.least(6);
    reply.forEach((group) => {
      expect(group).to.have.property('id');
      expect(group).to.have.property('title');
    });
  });

  it('should be able to retrieve all group rounds', async() => {
    const reply = await feb.getRounds(2015, 12083, 54100);
    expect(reply).to.be.a('array');
    expect(reply).to.have.lengthOf(3);

    const round = reply[1];
    expect(round).to.have.property('id');
    expect(round).to.have.property('title');
    expect(round.id).to.equal(440169);
    expect(round.title).to.equal('Jornada 2 17/04/2016');
  });

  it('should be able to retrieve the round games');
});
