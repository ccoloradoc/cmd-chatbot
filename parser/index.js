'use strict';

let parse = (data) => {
  if(data) {
    let temperature = data.main.temp;
    let weather = data.weather[0].description;
    let location = data.name;
    return `Right now, there is ${weather} in ${location} with temperature of ${temperature} °C`;
  }
};

module.exports = parse;
