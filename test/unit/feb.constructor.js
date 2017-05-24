'use strict';

const expect = require('chai').expect;

const injectToFeb = require('../../lib/feb');

describe('FEB constructor', () => {
  let FEB;
  beforeEach(() => {
    FEB = injectToFeb({});
  });

  it('should be instantiable', () => {
    new FEB();
  });

  it('should be able to be constructed without new keyword', () => {
    const feb = FEB();
    expect(feb).to.be.an.instanceOf(FEB);
  });

  it('should accept categoryId in options parameter', () => {
    const categoryId = 3;
    const feb = FEB({ categoryId });
    expect(feb.categoryId).to.equal(categoryId);
  });
});
