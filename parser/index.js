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

let parseCurrentWeather = (data) => {
  if(data) {
    let temperature = data.main.temp;
    let weather = data.weather[0].description;
    let location = data.name;
    return `Right now, there is ${weather.blue} in ${location.bold}. It is ${getFeel(temperature).blue} with temperature of ${temperature.toString().red} °C`;
  }
};

let normalizeUnixDate = (timestamp) => {
    var date = new Date(timestamp);
    date.setHours(0,0,0,0);
    return date.getTime() / 1000;
}

let calculateDate = (str) => {
  var today = new Date().getTime();
  switch (str) {
    case 'tomorrow':
      today += 86400000;
      break;
    case 'day after tomorrow':
      today += (2 * 86400000);
      break;
  }

  return normalizeUnixDate(today);
}

let retriveVerb = (time) => {
  switch (time) {
    case 'today':
      return 'is'
    case 'tomorrow':
    case 'day after tomorrow':
      return 'will have';
  }
}

let parseWeatherForecast = (data, time) => {
  var day = calculateDate(time);
  let location = data.city.name;

  let forecast = data.list.filter(item => {
    return normalizeUnixDate(item.dt * 1000) == day;
  });

  if(forecast.length > 0) {
    let temperature = forecast[0].temp.day;
    let weather = forecast[0].weather[0].description;
    return `${time}, We ${retriveVerb(time)} ${weather.blue} in ${location.bold}. It ${retriveVerb(time)} ${getFeel(temperature).blue} with temperature of ${temperature.toString().red} °C`;
  }
}

module.exports = {
  parseCurrentWeather: parseCurrentWeather,
  parseWeatherForecast: parseWeatherForecast
};
