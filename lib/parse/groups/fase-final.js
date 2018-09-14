'use strict';

module.exports = {
  name: 'fase-final',
  matcher: /^(final|fase final)$/i,
  handler: function(value) {
    const phase = {
      title: 'Final'
    }

    return { phase };
  },
};
