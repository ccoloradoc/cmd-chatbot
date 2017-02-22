'use strict';

const colors = require('colors');

let getFeel = temp => {
  if(temp < 5) {
    return "shivering cold";
  } else if(temp >=5 && temp < 15) {
    return "pretty cold";
  } else if(temp >= 15 && temp < 25) {
    return "moderately cold";
  } else if(temp >= 25 && temp < 32) {
    return "quite warm";
  } else if(temp >= 32 && temp < 40) {
    return "very hot";
  } else {
    return "super hot";
  }
}

let parse = (data) => {
  if(data) {
    let temperature = data.main.temp;
    let weather = data.weather[0].description;
    let location = data.name;
    return `Right now, there is ${weather.blue} in ${location.bold}. It is ${getFeel(temperature).blue} with temperature of ${temperature.toString().red} °C`;
  }
};

module.exports = parse;
