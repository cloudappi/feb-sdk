'use strict';

// key = competition-title
const data = {
  '16-Impar': {
    id:30,
    phaseId: 16,
    title: 'Impar'
  },
  '16-Par': {
    id:31,
    phaseId: 16,
    title: 'Par'
  }
}

module.exports = {
  findOne: function (param) {
    return data[`${param.phaseId}-${param.title}`];
  }
}
