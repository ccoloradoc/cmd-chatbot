'use strict';

const rp = require('request-promise');

let options = {
    uri: 'http://api.openweathermap.org/data/2.5/',
    qs: {
      appid: '126f2df58945c7b8e8282c4930248b9c',
      units: 'metric'
    },
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
};

let currentWeather = (city, cb) => {
  options.uri += 'weather';
  options.qs.q = city;
  return rp(options);
}

let weatherForecast = (city, day) => {
  options.uri += 'forecast/daily';
  options.qs.q = city;
  options.qs.cnt = 5;
  return rp(options);
}

module.exports = {
  currentWeather: currentWeather,
  weatherForecast: weatherForecast
};
