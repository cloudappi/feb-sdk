'use strict';

module.exports = {
  name: 'playoff-final-space',
  // PLAY OFF Final
  // PLAY OFF 1/2 Final
  matcher: /^PLAY OFF( 1\/\d)* FINAL/i,
  handler: function(value) {
    const parts = value.split('PLAY OFF ');
    const phase = {
      title: parts[1]
    };

    return { phase };
  },
};
