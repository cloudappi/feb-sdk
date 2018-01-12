'use strict';

const cheerio = require('cheerio');
const qs = require('querystring');
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

  proto._request = async function _request(params={}, resource, method) {
    debug('Requesting ' + JSON.stringify(params));

    const securityFields = await this._getSecurityFormValues();
    let formData = Object.assign({}, securityFields);
    formData = Object.assign(formData, params);

    debug('Request after adding security params' + JSON.stringify(params));

    let uri = 'http://competiciones.feb.es/autonomicas/';
    uri += resource ? resource : 'Resultados.aspx?a=' + this.competitionId;

    method = method || 'POST';

    const requestOptions = {
      method, uri
    };

    if (method === 'POST') requestOptions.formData = formData;

    const response = await http(requestOptions);

    this._securityFormValues = this._extractSecurityFormValues(response);

    return response;
  };

  proto.getSeasons = async function getSeasons() {
    debug('Getting seasons');
    const html = await this._request();

    const select = cheerio.load(html, {
      lowerCaseTags: true,
    });
    const results = [];
    debug('Parsing elements');
    select('select#controlNavegacion_temporadasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getCategories = async function getCategories(seasonId) {
    debug('Getting categories');
    const html = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId
    });
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });
    const results = [];
    debug('Parsing elements');
    select('select#controlNavegacion_categoriasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getGroups = async function getGroups(seasonId, categoryId) {
    debug('Getting groups');
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
    debug('Parsing elements');
    select('select#gruposDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getRounds = async function getRounds(seasonId, categoryId, groupId) {
    debug('Getting rounds');
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
    debug('Parsing elements');
    select('select#jornadasDropDownList option').each(function(i, item) {
      results.push({
        id: parseInt(item.attribs.value),
        title: item.children[0].data
      });
    });
    return results;
  };

  proto.getGames = async function getGames(seasonId, categoryId, groupId, roundId) {
    debug('Getting games');
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
    const htmlPrevious = await this._request({
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
      'jornadasDropDownList': roundId - 1,
    });
    const selectPrevious = cheerio.load(htmlPrevious, {
      lowerCaseTags: true,
      decodeEntities: true
    });

    debug('Parsing elements');

    const stadiums = [];
    selectPrevious('#proximaJornadaDataGrid tr').each(function(i, row) {
      const rawTeamsLine = row.children[1].children[1].children[0].data.trim();
      const stadium = row.children[1].children[4].children[0].data.trim();
      stadiums[rawTeamsLine] = stadium;
    });

    const results = [];
    select('#jornadaDataGrid tr').each(function(i, row) {

      const rawTeamsLine = row.children[1].children[1].children[0].data.trim();
      const teams = rawTeamsLine.split(' - ');
      const scores = row.children[2].children[1].children[0].data.split('-');
      const day = row.children[3].children[1].children[0].data;
      const hour = row.children[4].children[1].children[0].data;

      let stadium = null;
      let febId = null;
      if (stadiums[rawTeamsLine]){
        stadium = stadiums[rawTeamsLine];
        febId = stadium.replace('Campo: ','').split('-');
        febId = parseInt(febId[0]);
      }

      results.push({
        day,
        hour,
        rawTeamsLine,
        localTeam: teams[0].trim(),
        localScore: parseInt(scores[0]) || null,
        visitorTeam: teams[1].trim(),
        visitorScore: parseInt(scores[1]) || null,
        stadium:{
          fullName: stadium,
          febId
        }
      });
    });

    return results;
  };

  proto._preloadClubs = async function _preloadClubs(categoryId) {
    debug('Preloading club');
    const params = {
      a: this.competitionId,
      c: categoryId,
      med: 0
    };
    const query = qs.stringify(params);
    const uri = 'Equipos.aspx?' + query;

    return await this._request({}, uri, 'GET');
  };

  function clubsPageHaveNextPageLink(select) {
    debug('Checking if clubs page have next page link');
    let morePending = false;

    const navLinks = select('.TablaDatosEnlaceNavegacion:nth-child(1) a');

    if (navLinks.length > 0) {
      let link;
      for (let i = 0; i < navLinks.length; i++) {
        link = navLinks[i];
        if (link.children[0].data === 'Siguiente >') {
          morePending = true;
          break;
        }
      }
    }

    debug('Clubs page have next page link? ' + morePending);
    return morePending;
  }

  function extractClubPageRows(select) {
    debug('Extracting clubs page rows');
    const rows = [];

    const teamNames = select('.CabeceraSeccion');
    const clubNames = select('#Table4 tr:nth-child(1) .TablaDatosFilasImparesResaltada span');

    for (let i=0; i<teamNames.length; i++) {
      rows.push({
        team: teamNames[i].children[0].data.trim(),
        club: clubNames[i].children[0].data.trim()
      });
    }

    return rows;
  }

  proto._extractGroupId = function _extractGroupId(html) {
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });

    const current = select('#gruposDropDownList option[selected="selected"]')[0];
    return current.attribs.value;
  };

  proto._getClubsFirstPage = async function _getClubsFirstPage(seasonId, categoryId, groupId) {
    debug('Getting first clubs page');

    let html = await this._preloadClubs(categoryId);

    const defaultGroup = parseInt(this._extractGroupId(html));
    const isTheDefaultGroup = defaultGroup === groupId;
    if (!isTheDefaultGroup) {
      const params = {
        a: this.competitionId,
        c: categoryId,
        med: 0
      };
      const query = qs.stringify(params);
      const uri = 'Equipos.aspx?' + query;

      const body = {
        'controlNavegacion:temporadasDropDownList': seasonId,
        'controlNavegacion:categoriasDropDownList': categoryId,
        'gruposDropDownList': groupId
      };

      html = await this._request(body, uri, 'POST');
    }

    debug('Parsing elements');
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });

    const result = {
      morePending: clubsPageHaveNextPageLink(select),
      rows: extractClubPageRows(select)
    };

    return result;
  };

  proto._getClubsSecondPage = async function _getClubsSecondPage(seasonId, categoryId, groupId) {
    debug('Getting second clubs page');
    await this._getClubsFirstPage(seasonId, categoryId, groupId);

    const params = {
      a: this.competitionId,
      c: categoryId,
      med: 0
    };

    const query = qs.stringify(params);
    const uri = 'Equipos.aspx?' + query;

    const body = {
      'controlNavegacion:temporadasDropDownList': seasonId,
      'controlNavegacion:categoriasDropDownList': categoryId,
      'gruposDropDownList': groupId,
      '__EVENTTARGET': 'equiposDataGrid$_ctl1$_ctl1'
    };

    const html = await this._request(body, uri, 'POST');

    debug('Parsing elements');
    const select = cheerio.load(html, {
      lowerCaseTags: true,
      decodeEntities: true
    });

    const result = {
      morePending: clubsPageHaveNextPageLink(select),
      rows: extractClubPageRows(select)
    };

    return result;
  };

  proto.getClubs = async function getClubs(seasonId, categoryId, groupId) {
    debug('Getting clubs');
    debug('Parsing first clubs page');
    const firstPage = await this._getClubsFirstPage(seasonId, categoryId, groupId);
    let result = firstPage.rows;

    let morePending = firstPage.morePending;
    if (firstPage.morePending) {
      debug('Parsing second clubs page');
      const secondPage = await this._getClubsSecondPage(seasonId, categoryId, groupId);

      morePending = secondPage.morePending;
      if (morePending) {
        const msg = `Unexpected third clubs page. season: ${seasonId}, category: ${categoryId}, group: ${groupId}`;
        throw new Error(msg);
      }

      result = result.concat(secondPage.rows);
    }

    return result;
  };

  proto.getGroupType = async function getGroupType(seasonId, categoryId, groupId) {
    debug('Getting group type');
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
    debug('Parsing elements');
    const elements = select('#clasificacionCabeceraSeccion_tituloLabel');

    if (elements.length === 0) {
      debug('Unkown group type (group: ' +  groupId + ')');
      return undefined;
    }

    const text = elements[0].children[0].data;
    const result = text === 'Clasificación Jornada' ? 'league' : 'playoff';
    return result;
  };

  return FEB;
};
