'use strict';

const parse = require('./parse');
const expect = require('chai').expect;

describe('Parse', () => {
  describe('group', () => {
    it('should be able to correctly parse values', () => {
      let result = parse.group('Fase: 2 / Grupo: G');
      expect(result).to.exist;
      expect(result.matchedBy).to.equal('fase-grupo');
      expect(result.phase.title).to.equal('2');
      expect(result.group.title).to.equal('G');

      result = parse.group('Fase: Clasificación / Grupo: C1');
      expect(result).to.exist;
      expect(result.matchedBy).to.equal('fase-grupo');
      expect(result.phase.title).to.equal('Clasificación');
      expect(result.group.title).to.equal('C1');

      result = parse.group('Liga Regular Grupo: A-A');
      expect(result).to.exist;
      expect(result.matchedBy).to.equal('liga-regular-grupo');
      expect(result.phase.title).to.equal('Liga Regular');
      expect(result.group.title).to.equal('A-A');
    });
  });
});
