'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');

describe('feb.setCompetitionId', () => {
  let FEB;
  let context;
  let setCompetitionId;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {};
    setCompetitionId = FEB.prototype.setCompetitionId.bind(context);
  });

  it('should update the competitionId', () => {
    function test(competitionId) {
      setCompetitionId(competitionId);
      expect(context.competitionId).to.equal(competitionId);;
    }
    test(3);
    test(undefined);
  });
});
