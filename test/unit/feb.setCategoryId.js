'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');

describe('feb.setCategoryId', () => {
  let FEB;
  let context;
  let setCategoryId;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {};
    setCategoryId = FEB.prototype.setCategoryId.bind(context);
  });

  it('should update the categoryId', () => {
    function test(categoryId) {
      setCategoryId(categoryId);
      expect(context.categoryId).to.equal(categoryId);;
    }
    test(3);
    test(undefined);
  });
});
