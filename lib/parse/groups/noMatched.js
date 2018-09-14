const values = require('./data.json');

values.forEach((value) => {
  if (value.matchedBy) return;

  console.log(`${value.times}\t${value.title}`);
});
