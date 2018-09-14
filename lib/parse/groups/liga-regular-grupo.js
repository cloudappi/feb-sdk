'use strict';

module.exports = {
  name: 'liga-regular-grupo',
  matcher: /^Liga Regular Grupo: .+/i,
  handler: function(value) {
    const parts = value.split('Liga Regular Grupo: ');

    const phase = {
      title: 'Liga Regular'
    }

    const group = {
      title: parts[1]
    };

    return { phase, group };
  },
};
