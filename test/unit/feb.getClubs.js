'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const qs = require('querystring');

const injectToFeb = require('../../lib/feb');
const equiposFirstPage = require('./data/equiposPage1');
const equiposSecondPage = require('./data/equiposPage2');

describe('feb.getClubs', () => {
  const seasonId = 2016;
  const categoryId = 13242;
  const groupId = 9989;
  let FEB;
  let context;
  let getClubs;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      _getClubsFirstPage: sinon.stub().resolves(equiposFirstPage.content),
      _getClubsSecondPage: sinon.stub().resolves(equiposSecondPage.content)
    };
    getClubs = FEB.prototype.getClubs.bind(context);
  });

  it('should call _getClubsFirstPage and _getClubsSecondPage first', async () => {
    await getClubs(seasonId, categoryId, groupId);

    ['_getClubsFirstPage', '_getClubsSecondPage'].forEach(function(fnName) {
      expect(context[fnName].calledOnce).to.be.true;
      let args = context[fnName].getCall(0).args;
      expect(args[0]).to.equal(seasonId);
      expect(args[1]).to.equal(categoryId);
      expect(args[2]).to.equal(groupId);
    });
  });


  it('should join the replies of the pages', async () => {
    const result = await getClubs(seasonId, categoryId, groupId);

    const firstPageRows = equiposFirstPage.content.rows;
    const secondPageRows = equiposSecondPage.content.rows;

    const expectedLength = firstPageRows.length + secondPageRows.length;
    expect(result).to.have.lengthOf(expectedLength);

    firstPageRows.forEach((row, index) => {
      expect(row.team).to.equal(result[index].team);
      expect(row.club).to.equal(result[index].club);
    });

    const secondPageResultsStart = firstPageRows.length;
    secondPageRows.forEach((row, index) => {
      const movedIndex = secondPageResultsStart + index;
      expect(row.team).to.equal(result[movedIndex].team);
      expect(row.club).to.equal(result[movedIndex].club);
    });
  });

  it('should work with clubs with only one page', async () => {
    const equiposSinglePage = require('./data/equiposSinglePage');
    context._getClubsFirstPage = sinon.stub().resolves(equiposSinglePage.content);
    getClubs = FEB.prototype.getClubs.bind(context);

    const result = await getClubs(seasonId, categoryId, groupId);

    const pageRows = equiposSinglePage.content.rows;
    const expectedLength = pageRows.length;
    expect(result).to.have.lengthOf(expectedLength);

    pageRows.forEach((row, index) => {
      expect(row.team).to.equal(result[index].team);
      expect(row.club).to.equal(result[index].club);
    });
  });

  it('should fail when a third page exists', (done) => {
    context._getClubsSecondPage = sinon.stub().resolves({
      morePending: true,
      rows: []
    });
    getClubs = FEB.prototype.getClubs.bind(context);

    getClubs(seasonId, categoryId, groupId)
      .then(() => {
        throw new Error('Third page available and no error raised');
      })
      .catch((err) => {
        if (/^Unexpected third clubs page\.(.)*$/.test(err.message)) return done();
        done(err);
      });
  });
});
