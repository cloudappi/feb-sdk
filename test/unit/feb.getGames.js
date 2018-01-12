'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb.getGames', () => {
  const seasonId = 2016;
  const categoryId = 1111;
  const groupId = 2222;
  const roundId = 3333;
  let FEB;
  let context;
  let getGames;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      getRounds: sinon.stub().resolves(),
      _request: sinon.stub().resolves(resultadosPage.html)
    };
    getGames = FEB.prototype.getGames.bind(context);
  });

  it('should call getRounds first', async () => {
    await getGames(seasonId, categoryId, groupId, roundId);
    expect(context.getRounds.calledOnce).to.be.true;
    const args = context.getRounds.getCall(0).args;
    expect(args[0]).to.equal(seasonId);
    expect(args[1]).to.equal(categoryId);
    expect(args[2]).to.equal(groupId);
  });

  it('should request the proper body', async () => {
    await getGames(seasonId, categoryId, groupId, roundId);
    expect(context._request.calledTwice).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
      'jornadasDropDownList': roundId
    });
  });

  it('should return the list of games', async () => {
    const games = await getGames(seasonId, categoryId, groupId);

    expect(games).to.have.lengthOf(8);

    const expectedGames = resultadosPage.games;
    games.forEach((game, index) => {
      expect(game.day).to.equal(expectedGames[index].day);
      expect(game.hour).to.equal(expectedGames[index].hour);
      expect(game.rawTeamsLine).to.equal(expectedGames[index].localTeam + ' - ' + expectedGames[index].visitorTeam);
      expect(game.localTeam).to.equal(expectedGames[index].localTeam);
      expect(game.localScore).to.equal(expectedGames[index].localScore);
      expect(game.visitorTeam).to.equal(expectedGames[index].visitorTeam);
      expect(game.visitorScore).to.equal(expectedGames[index].visitorScore);
    });
  });
});
