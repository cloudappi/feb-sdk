'use strict';

const cheerio = require('cheerio');
const qs = require('querystring');

module.exports = function injectToFEB(http) {
  function FEB(options={}) {
    if (!(this instanceof FEB)) return new FEB(options);
    this.categoryId = options.categoryId;
  }
  const proto = FEB.prototype;

  proto.setCategoryId = function setCategoryId(categoryId) {
    this.categoryId = categoryId;
  };

  proto._request = function _request(params={}) {
    const postBody = qs.stringify(params);

    const requestOptions = {
      method: 'POST',
      host: 'competiciones.feb.es',
      path: '/autonomicas/Resultados.aspx?a=' + this.categoryId,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postBody)
      }
    };


    return new Promise(async function(resolve, reject) {
      const req = http.request(requestOptions, concatResponse);
      req.write(postBody);
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
    const selector = cheerio.load(html, {
      lowerCaseTags: true,
    });
    const results = [];
    selector('select#controlNavegacion_temporadasDropDownList option').each(function(i, item) {
      results.push({
        id: item.attribs.value,
        title: item.children[0].data
      });
    });
    return results;
  };

  return FEB;
};
