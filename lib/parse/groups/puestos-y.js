'use strict';

module.exports = {
  name: 'puestos-y',
  // 3º y 4º Puesto
  // 3º y 4º
  matcher: /^\d+º y \d+º( Puesto){0,1}$/i,
  handler: function(value) {
    const phase = {
      title: value.split(' Puesto')[0]
    }

    return { phase };
  },
};
