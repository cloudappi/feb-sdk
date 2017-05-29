'use strict';

const cheerio = require('cheerio');
const debug = require('debug')('feb-sdk');

module.exports = function injectToFEB(http) {
  function FEB(options={}) {
    if (!(this instanceof FEB)) return new FEB(options);
    this.competitionId = options.competitionId;
    this._securityFormValues = null;
  }
  const proto = FEB.prototype;

  proto.setCompetitionId = function setCategoryId(competitionId) {
    debug('Competition ID is now ' + competitionId);
    this.competitionId = competitionId;
  };


  proto._getInitialPageHTML = async function _getInitialPageHTML() {
    debug('Requesting initial page');
    const requestOptions = {
      method: 'GET',
      uri: 'http://competiciones.feb.es/autonomicas/Resultados.aspx?a=' + this.competitionId,
      path: '' + this.competitionId,
    };

    return await http(requestOptions);
  };

  proto._extractSecurityFormValues = function extractSecurityFormValues(html) {
    debug('Extracting security values for form');
    const selector = cheerio.load(html, {
      lowerCaseTags: true,
    });

    const results = {};

    function parse(id) {
      const node = selector('#' + id)[0];

      if (!node) {
        results[id] = null;
        return;
      }

      results[id] = node.attribs.value;
    }

    parse('__VIEWSTATE');
    parse('__VIEWSTATEGENERATOR');
    parse('__EVENTTARGET');
    parse('__EVENTARGUMENT');
    parse('__EVENTVALIDATION');

    return results;
  };

  proto._getSecurityFormValues = async function _getSecurityFormValues() {
    if (this._securityFormValues) return Object.assign({}, this._securityFormValues);

    debug('No previous security form values available. Obtaning ones');
    const headers = this._extractSecurityFormValues(await this._getInitialPageHTML());
    return headers;
  };

  proto._request = async function _request(params={}) {
    debug('Requesting ' + JSON.stringify(params));
    let formData = Object.assign({}, params);

    const securityFields = await this._getSecurityFormValues();
    formData = Object.assign(formData, securityFields);

    const uri = 'http://competiciones.feb.es/autonomicas/Resultados.aspx?a=' + this.competitionId;
    const requestOptions = {
      method: 'POST',
      uri,
      formData
    };

    const response = await http(requestOptions);

    //this._securityFormValues = this._extractSecurityFormValues(response);
    //console.log(this._securityFormValues);

    return response;
  };

  proto.getSeasons = async function getSeasons() {
    const html = await this._request();

    const selector = cheerio.load(html, {
      lowerCaseTags: true,
    });
    const results = [];
    selector('select#controlNavegacion_temporadasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getCategories = async function getCategories(seasonId) {
    const html = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId
    });
    const selector = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];
    selector('select#controlNavegacion_categoriasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  return FEB;
};
