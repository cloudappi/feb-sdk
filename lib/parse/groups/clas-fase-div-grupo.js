'use strict';

module.exports = {
  name: 'clas-fase-div-grupo',
  // CLAS. para 1/4 final 1ª div. 1
  matcher: /CLAS\. para .* final \dª div. [\w\d]+$/i,
  handler: function(value) {
    let parts = value.split('CLAS\. para ')[1];

    const division = {
      title: parts.split('final ')[1].split('ª')[0]
    };

    const phase = {
      title: 'Clasificación ' + parts.split('final ')[0].trim() + ' final'
    }

    const group = {
      title: parts.split('div. ')[1]
    };

    return { division, phase, group };
  },
};
