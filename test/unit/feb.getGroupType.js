'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosLeaguePage = require('./data/resultadosLeaguePage');

describe('feb.getGroupType', () => {
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 9989;
  let FEB;
  let context;
  let getGroupType;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      getGroups: sinon.stub().resolves(),
      _request: sinon.stub().resolves(resultadosLeaguePage.html)
    };
    getGroupType = FEB.prototype.getGroupType.bind(context);
  });

  it('should call getGroups first', async () => {
    await getGroupType(seasonId, categoryId, groupId);
    expect(context.getGroups.calledOnce).to.be.true;
    const args = context.getGroups.getCall(0).args;
    expect(args[0]).to.equal(seasonId);
    expect(args[1]).to.equal(categoryId);
  });

  it('should request the proper body', async () => {
    await getGroupType(seasonId, categoryId, groupId);
    expect(context._request.calledOnce).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId
    });
  });

  it('should identify a league group', async () => {
    const type = await getGroupType(seasonId, categoryId, groupId);
    expect(type).to.equal('league');
  });

  it('should identify a league group', async () => {
    const resultadosPlayoffPage = require('./data/resultadosPlayoffPage');
    context._request = sinon.stub().resolves(resultadosPlayoffPage.html);
    const type = await getGroupType(seasonId, categoryId, groupId);
    expect(type).to.equal('playoff');
  });
});
