'use strict';

module.exports = {
  name: 'fase-grupo-2',
  matcher: /^.+ FASE .+$/,
  handler: function(value) {
    const parts = value.split(' FASE ');

    let phaseTitle = parts[0].toLowerCase();
    phaseTitle = phaseTitle.charAt(0).toUpperCase() + phaseTitle.slice(1);

    const phase = {
      title: phaseTitle
    }

    const group = {
      title: parts[1]
    };

    return { phase, group };
  },
};
