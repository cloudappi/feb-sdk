'use strict';

const names = ['fase-grupo', 'playoff-final', 'division-fase-grupo',
  'fase-grupo-2', 'puestos-division', 'puestos-final', 'fase-final',
  'puestos-grupo', 'descenso-div-grupo', 'clas-fase-div-grupo',
  'playoff-final-space', 'playoff-fase-division', 'fase-grupo-3',
  'puestos-y', 'pre-playoff', 'liga-regular-grupo'
];

const parsers = {};
names.forEach((name) => {
  parsers[name] = require('./' + name);
});

module.exports = parsers;

