'use strict';

const cheerio = require('cheerio');
const qs = require('querystring');

module.exports = function injectToFEB(http) {
  function FEB(options={}) {
    if (!(this instanceof FEB)) return new FEB(options);
    this.competitionId = options.competitionId;
  }
  const proto = FEB.prototype;

  proto.setCompetitionId = function setCategoryId(competitionId) {
    this.competitionId = competitionId;
  };

  proto._request = function _request(params={}) {
    const body = Object.assign({}, params);
    body.__EVENTTARGET = '';
    body.__EVENTARGUMENT = '';
    body.__EVENTVALIDATION = '';
    body.__LASTFOCUS = '';
    body.__VIEWSTATE = '';
    body.__VIEWSTATEGENERATOR = '';

    const encodedBody = qs.stringify(body);

    console.log(encodedBody);

    const requestOptions = {
      method: 'POST',
      host: 'competiciones.feb.es',
      path: '/autonomicas/Resultados.aspx?a=' + this.competitionId,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(encodedBody)
      }
    };

    return new Promise(async function(resolve, reject) {
      const req = http.request(requestOptions, concatResponse);
      req.write(encodedBody);
      req.end();

      function concatResponse(res) {
        let html = '';

        res.on('end', function() {
          resolve(html);
        });
        res.on('error', reject);
        res.on('data', function (chunk) {
          html += chunk;
        });
      }
    });
  };

  proto.getSeasons = async function getSeasons() {
    const html = await this._request();
    console.log(html);
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
