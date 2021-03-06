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
    expect(reply).to.have.lengthOf(6);
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

  // it('should be able to retrieve the round games', async () => {
  //   const reply = await feb.getGames(2015, 12083, 54100, 440169);
  //   expect(reply).to.be.a('array');
  //   expect(reply).to.have.lengthOf(8);

  //   reply.forEach((game) => {
  //     expect(game).to.have.property('day');
  //     expect(game).to.have.property('hour');
  //     expect(game).to.have.property('rawTeamsLine');
  //     expect(game).to.have.property('localTeam');
  //     expect(game).to.have.property('localScore');
  //     expect(game).to.have.property('visitorTeam');
  //     expect(game).to.have.property('visitorScore');
  //     expect(game).to.have.property('stadium');
  //   });

  //   const game = reply[2];
  //   expect(game.day).to.equal('16/04/2016');
  //   expect(game.hour).to.equal('20:00');
  //   expect(game.localTeam).to.equal('C.B. LAS ROZAS');
  //   expect(game.localScore).to.equal(48);
  //   expect(game.visitorTeam).to.equal('MAJADAHONDA');
  //   expect(game.visitorScore).to.equal(81);
  //   expect(game.stadium.febId).to.equal(4537);
  // });

  it('should be able to retrieve the group team-clubs relationship', async() => {
    const reply = await feb.getClubs(2015, 12083, 54100);
    expect(reply).to.be.an('array');
    expect(reply).to.have.lengthOf(16);

    reply.forEach((club) => {
      expect(club).to.have.property('team');
      expect(club).to.have.property('club');
    });
  });

  it('it should be able to retrieve team-clubs when it is the first group', async() => {
    const reply = await feb.getClubs(2017, 14631, 63724);
    expect(reply).to.be.an('array');
    expect(reply).to.have.lengthOf(18);

    reply.forEach((club) => {
      expect(club).to.have.property('team');
      expect(club).to.have.property('club');
    });
  });

  it('should identify a league group', async () => {
    const reply = await feb.getGroupType(2015, 12083, 49760);
    expect(reply).to.equal('league');
  });

  it('should identify a playoff group', async () => {
    const reply = await feb.getGroupType(2015, 12083, 54100);
    expect(reply).to.equal('playoff');
  });
});
