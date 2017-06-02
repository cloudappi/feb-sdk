'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const injectToFeb = require('../../lib/feb');
const resultadosPage = require('./data/resultadosPage');

describe('feb.getCategories', () => {
  const seasonId = 2016;
  let FEB;
  let context;
  let getCategories;
  beforeEach(() => {
    FEB = injectToFeb();
    context = {
      _request: sinon.stub().resolves(resultadosPage.html)
    };
    getCategories = FEB.prototype.getCategories.bind(context);
  });

  it('should request the proper body', () => {
    getCategories(seasonId);
    expect(context._request.calledOnce).to.be.true;
    const body = context._request.getCall(0).args[0];
    expect(body).to.eql({
      'controlNavegacion:temporadasDropDownList': seasonId
    });
  });

  it('should return the list of categories', async () => {
    const categories = await getCategories(seasonId);
    const expectedCategories = resultadosPage.categories;
    categories.forEach((category, index) => {
      expect(category.id).to.exist;
      expect(category.id).to.equal(expectedCategories[index].id);
      expect(category.title).to.exist;
      expect(category.title).to.equal(expectedCategories[index].title);
    });
  });
});
