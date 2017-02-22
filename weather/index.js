'use strict';

var rp = require('request-promise');
var Promise = require('promise');

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
  return new Promise(function (fulfill, reject){
    options.qs.q = escape(city);
    rp(options)
      .then(function (response) {
        //console.log(response)
        fulfill({
          temp: response.main.temp,
          weather: response.weather[0].description
        });
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
}

module.exports = {
  currentWeather: currentWeather
};
