'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb.getRounds', () => {
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 9989;
  let FEB;
  let context;
  let getRounds;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      getGroups: sinon.stub().resolves(),
      _request: sinon.stub().resolves(resultadosPage.html)
    };
    getRounds = FEB.prototype.getRounds.bind(context);
  });

  it('should call getGroups first', async () => {
    await getRounds(seasonId, categoryId);
    expect(context.getGroups.calledOnce).to.be.true;
    const args = context.getGroups.getCall(0).args;
    expect(args[0]).to.equal(seasonId);
    expect(args[1]).to.equal(categoryId);
  });

  it('should request the proper body', async () => {
    await getRounds(seasonId, categoryId, groupId);
    expect(context._request.calledOnce).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId
    });
  });

  it('should return the list of rounds', async () => {
    const rounds = await getRounds(seasonId, categoryId, groupId);
    const expectedRounds = resultadosPage.rounds;
    rounds.forEach((round, index) => {
      expect(round.id).to.exist;
      expect(round.id).to.equal(expectedRounds[index].id);
      expect(round.title).to.exist;
      expect(round.title).to.equal(expectedRounds[index].title);
    });
  });
});
