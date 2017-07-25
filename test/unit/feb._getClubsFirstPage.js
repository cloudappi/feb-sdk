'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');
const equiposFirstPage = require('./data/equiposPage1');

describe('feb._getClubsFirstPage', () => {
  const competitionId = 14;
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 9989;
  let FEB;
  let context;
  let _getClubsFirstPage;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      competitionId,
      _request: sinon.stub().resolves(equiposFirstPage.html),
      _extractGroupId: sinon.stub().resolves(groupId+1),
      _preloadClubs: sinon.stub().resolves()
    };
    _getClubsFirstPage = FEB.prototype._getClubsFirstPage.bind(context);
  });

  it('should call _preloadClubs first', async () => {
    await _getClubsFirstPage(seasonId, categoryId, groupId);
    expect(context._preloadClubs.calledOnce).to.be.true;
    const args = context._preloadClubs.getCall(0).args;
    expect(args[0]).to.equal(categoryId);
  });


  it('should request the proper body', async () => {
    await _getClubsFirstPage(seasonId, categoryId, groupId);

    expect(context._request.calledOnce).to.be.true;

    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId
    });

    const uri = context._request.getCall(0).args[1];
    const uriParameters = qs.parse(uri.split('?')[1]);
    expect(Object.keys(uriParameters)).to.have.lengthOf(3);
    expect(uriParameters.a).to.equal(competitionId.toString());
    expect(uriParameters.c).to.equal(categoryId.toString());
    expect(uriParameters.med).to.equal('0');

    const method = context._request.getCall(0).args[2];
    expect(method).to.equal('POST');
  });

  it('should return the list of clubs and teams', async () => {
    const result = await _getClubsFirstPage(seasonId, categoryId, groupId);

    expect(result.morePending).to.equal(equiposFirstPage.content.morePending);

    const rows = result.rows;
    const expectedRows = equiposFirstPage.content.rows;

    expect(rows).to.have.lengthOf(expectedRows.length);

    expectedRows.forEach((row, index) => {
      expect(row.team).to.equal(rows[index].team);
      expect(row.club).to.equal(rows[index].club);
    });
  });

  it('should work with groups with only one page', async () => {
    const equiposSinglePage = require('./data/equiposSinglePage');
    context._request = sinon.stub().resolves(equiposSinglePage.html);
    _getClubsFirstPage = FEB.prototype._getClubsFirstPage.bind(context);

    const result = await _getClubsFirstPage(seasonId, categoryId, groupId);
    expect(result.morePending).to.equal(equiposSinglePage.content.morePending);

    const rows = result.rows;
    const expectedRows = equiposSinglePage.content.rows;

    expect(rows).to.have.lengthOf(expectedRows.length);

    expectedRows.forEach((row, index) => {
      expect(row.team).to.equal(rows[index].team);
      expect(row.club).to.equal(rows[index].club);
    });
  });
});
