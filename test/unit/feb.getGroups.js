'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb.getGroups', () => {
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 999;
  let FEB;
  let context;
  let getGroups;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      _request: sinon.stub().resolves(resultadosPage.html)
    };
    getGroups = FEB.prototype.getGroups.bind(context);
  });

  it('should request the proper body', () => {
    getGroups(seasonId, categoryId);
    expect(context._request.calledOnce).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId
    });
  });

  it('should return the list of groups', async () => {
    const groups = await getGroups(seasonId, categoryId);
    const expectedRounds = resultadosPage.groups;
    groups.forEach((group, index) => {
      expect(group.id).to.exist;
      expect(group.id).to.equal(expectedRounds[index].id);
      expect(group.title).to.exist;
      expect(group.title).to.equal(expectedRounds[index].title);
    });
  });
});
