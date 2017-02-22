'use strict';

var rp = require('request-promise');

var options = {
    uri: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      appid: '126f2df58945c7b8e8282c4930248b9c',
      units: 'metric'
    },
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
};

let currentWeather = (city, cb) => {
  options.qs.q = city;
  return rp(options);
}

module.exports = {
  currentWeather: currentWeather
};
