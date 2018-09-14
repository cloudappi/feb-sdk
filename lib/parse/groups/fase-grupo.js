'use strict';

module.exports = {
  name: 'fase-grupo',
  matcher: /^Fase: .+ \/ Grupo: .+/i,
  handler: function(value) {
    const parts = value.split(' / ');

    const phase = {
      title: parts[0].split(': ')[1]
    }

    const group = {
      title: parts[1].split(': ')[1]
    };

    return { phase, group };
  },
};
