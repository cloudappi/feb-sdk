'use strict';

module.exports = {
  name: 'puestos-grupo',
  // Puestos 9 al 16 / Grupo: 1
  matcher: /^Puestos \d+ al \d+ \/ Grupo: [\w\d]+$/i,
  handler: function(value) {
    const parts = value.split(' / ');

    const phase = {
      title: parts[0]
    }

    const group = {
      title: parts[1].split('Grupo: ')[1]
    };

    return { phase, group };
  },
};
