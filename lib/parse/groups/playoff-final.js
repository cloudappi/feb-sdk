'use strict';

module.exports = {
  name: 'playoff-final',
  matcher: /^Play-Off 1\/\d Final$/i,
  handler: function(value) {
    const parts = value.split(' ');
    const phase = {
      title: parts[1] + ' ' + parts[2].toLowerCase()
    };

    return { phase };
  },
};
