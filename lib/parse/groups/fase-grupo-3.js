'use strict';

module.exports = {
  name: 'fase-grupo-3',
  // Clas.1/4Final Grupo: 1
  // Descenso Grupo: 2
  matcher: /^[\d\w\/\.]+ Grupo: [\d\w]+$/,
  handler: function(value) {
    const parts = value.split(' Grupo: ');

    const phase = {
      title: parts[0]
    }

    const group = {
      title: parts[1]
    };

    return { phase, group };
  },
};
