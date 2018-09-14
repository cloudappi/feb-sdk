'use strict';

module.exports = {
  name: 'pre-playoff',
  matcher: /^Pre Play-off$/i,
  handler: function(value) {
    const phase = {
      title: value
    };

    return { phase };
  },
};
