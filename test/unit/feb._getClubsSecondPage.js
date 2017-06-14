'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');
const equiposSecondPage = require('./data/equiposPage2');

describe('feb._getClubsSecondPage', () => {
  const competitionId = 14;
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 9989;
  let FEB;
  let context;
  let _getClubsSecondPage;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      competitionId,
      _request: sinon.stub().resolves(equiposSecondPage.html),
      _getClubsFirstPage: sinon.stub().resolves()
    };
    _getClubsSecondPage = FEB.prototype._getClubsSecondPage.bind(context);
  });

  it('should call _getClubsFirstPage first', async () => {
    await _getClubsSecondPage(seasonId, categoryId, groupId);
    expect(context._getClubsFirstPage.calledOnce).to.be.true;
    const args = context._getClubsFirstPage.getCall(0).args;
    expect(args[0]).to.equal(seasonId);
    expect(args[1]).to.equal(categoryId);
    expect(args[2]).to.equal(groupId);
  });


  it('should request the proper body', async () => {
    await _getClubsSecondPage(seasonId, categoryId, groupId);

    expect(context._request.calledOnce).to.be.true;

    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
      '__EVENTTARGET': 'equiposDataGrid$_ctl1$_ctl1'
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
    const result = await _getClubsSecondPage(seasonId, categoryId, groupId);

    expect(result.morePending).to.equal(equiposSecondPage.content.morePending);

    const rows = result.rows;
    const expectedRows = equiposSecondPage.content.rows;

    expect(rows).to.have.lengthOf(expectedRows.length);

    expectedRows.forEach((row, index) => {
      expect(row.team).to.equal(rows[index].team);
      expect(row.club).to.equal(rows[index].club);
    });
  });
});
