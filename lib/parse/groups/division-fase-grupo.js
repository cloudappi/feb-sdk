'use strict';

module.exports = {
  name: 'division-fase-grupo',
  matcher: /\dª+Div \/ Fase: .+ \/ Grupo: .+$/i,
  handler: function(value) {
    const parts = value.split(' / ');

    const division = {
      title: parts[0].split('ªDiv')[0]
    };

    const phase = {
      title: parts[1].split(': ')[1]
    }

    const group = {
      title: parts[2].split(': ')[1]
    };

    return { division, phase, group };
  },
};
