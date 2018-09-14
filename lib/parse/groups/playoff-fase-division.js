'use strict';

module.exports = {
  name: 'playoff-fase-division',
  // Play-Off 1/2 Final 1ª Division
  matcher: /^Play-Off 1\/\d Final \d+ª Division$/i,
  handler: function(value) {
    let parts = value.split(' ');

    const division = {
      title: parts[3].split('ª')[0]
    };

    const phase = {
      title: parts[1] + ' final'
    };

    return { division, phase };
  },
};
