'use strict';

module.exports = {
  name: 'puestos-division',
  matcher: /^Puestos \d+-\d+ \dª Divisi.n$/i,
  handler: function(value) {
    const parts = value.split(' ');

    const division = {
      title: parts[2].split('ª')[0]
    };

    const phase = {
      title: 'Puestos ' + parts[1]
    }

    return { division, phase };
  },
};
