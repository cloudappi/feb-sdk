'use strict';

module.exports = {
  name: 'descenso-div-grupo',
  // DESCENSO 1ª div. 1
  matcher: /^DESCENSO \d+ª div. [\d\w]+$/i,
  handler: function(value) {
    let parts = value.split('DESCENSO ')[1].split('ª div. ');

    const division = {
      title: parts[0]
    };

    const phase = {
      title: 'Descenso'
    };

    const group = {
      title: parts[1]
    };

    return { division, phase, group };
  },
};
