'use strict';

module.exports = {
  name: 'puestos-final',
  matcher: /^\d+ al \d+ Puesto.+Final$/,
  handler: function(value) {
    const parts = value.split(' Puesto ');

    const step = parts[1];
    const positions = 'Puestos ' + parts[0];

    const phase = {
      title: step + '-' + positions
    }

    return { phase };
  },
};
