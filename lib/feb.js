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
    const select = cheerio.load(html, {
      lowerCaseTags: true,
    });

    const results = {};

    function parse(name, selector) {
      selector = selector || '#' + name;
      const node = select(selector)[0];

      if (!node) {
        results[name] = '';
        return;
      }

      results[name] = node.attribs.value + '';
    }

    parse('__VIEWSTATE');
    parse('__VIEWSTATEGENERATOR');
    parse('__EVENTTARGET');
    parse('__EVENTARGUMENT');
    parse('__EVENTVALIDATION');
    parse('__EVENTVALIDATION');
    parse('controlNavegacion:categoriasDropDownList', 'select#controlNavegacion_categoriasDropDownList option:checked');
    parse('controlNavegacion:temporadasDropDownList', 'select#controlNavegacion_temporadasDropDownList option:checked');
    parse('gruposDropDownList', 'select#gruposDropDownList option:checked');
    parse('jornadasDropDownList', 'select#jornadasDropDownList option:checked');

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
    const securityFields = await this._getSecurityFormValues();
    let formData = Object.assign({}, securityFields);

    formData = Object.assign(formData, params);

    const uri = 'http://competiciones.feb.es/autonomicas/Resultados.aspx?a=' + this.competitionId;
    const requestOptions = {
      method: 'POST',
      uri,
      formData
    };

    const response = await http(requestOptions);

    this._securityFormValues = this._extractSecurityFormValues(response);

    return response;
  };

  proto.getSeasons = async function getSeasons() {
    const html = await this._request();

    const select = cheerio.load(html, {
      lowerCaseTags: true,
    });
    const results = [];
    select('select#controlNavegacion_temporadasDropDownList option').each(function(i, item) {
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
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];
    select('select#controlNavegacion_categoriasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getGroups = async function getGroups(seasonId, categoryId) {
    await this.getCategories(seasonId);

    const html = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId
    });
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];
    select('select#gruposDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getRounds = async function getRounds(seasonId, categoryId, groupId) {
    await this.getGroups(seasonId, categoryId);

    const html = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
    });
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];
    select('select#jornadasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getGames = async function getGames(seasonId, categoryId, groupId, roundId) {
    await this.getRounds(seasonId, categoryId, groupId);

    const html = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
      'jornadasDropDownList': roundId,
    });
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];

    select('#jornadaDataGrid tr').each(function(i, row) {
      const teams = row.children[1].children[1].children[0].data.split(' - ');
      const scores = row.children[2].children[1].children[0].data.split('-');
      const day = row.children[3].children[1].children[0].data;
      const hour = row.children[4].children[1].children[0].data;

      results.push({
        day,
        hour,
        localTeam: teams[0],
        localScore: parseInt(scores[0]) || null,
        visitorTeam: teams[1],
        visitorScore: parseInt(scores[1]) || null
      });
    });

    return results;
  };

  return FEB;
};
