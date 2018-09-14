'use strict';

const data = require('./all');
const parse = require('./parse');

function processGroup(group) {
  const result = parse.group(group);
  return !!result;
}

function processCategory(category) {
  for (let i=category.length-1; i>=0; i--) {
    let group = category[i];

    if (!processGroup(group)) continue;

    category.splice(i, 1);
  }
}

function processSeason(season) {
  const categories = Object.keys(season);
  categories.forEach((categoryName) => {
    let category = season[categoryName];
    processCategory(category);
  });
}

function processData(data) {
  const seasons = Object.keys(data);
  seasons.forEach((seasonName) => {
    let season = data[seasonName];
    const stats = processSeason(season);
  });
}

function stats(data) {
  const result = {};

  const seasons = Object.keys(data);
  seasons.forEach((season) => {
    let count = {
      processable: 0,
      unprocessable: 0,
      total: 0
    };

    const categories = data[season];

    Object.keys(categories).forEach((categoryName) => {
      const category = categories[categoryName];
      category.length > 0 ? count.unprocessable++ : count.processable++;
      count.total++;
    });

    count.processablePercent = count.processable*1.0 / count.total;
    count.unprocessablePercent = 100 - count.processable;

    result[season] = count;
  });

  return result;
}

processData(data);
console.log(stats(data));

