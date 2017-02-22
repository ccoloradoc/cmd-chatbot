const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher');
const weather = require('./weather');
const parser = require('./parser');

rl.setPrompt('>');
rl.prompt();

rl.on('line', (input) => {
  matcher(input, data => {
    switch(data.intent) {
      case 'Hello':
        console.log(`${data.entities.greeting} mate!!!`)
        rl.prompt();
        break;
      case 'Bye':
        console.log("Have a nice day!");
        process.exit(0);
        break;
      case 'CurrentWeather':
        console.log('Oh, let me check...');
        weather.currentWeather(data.entities.city)
          .then(weatherData => {
            console.log(parser.parseCurrentWeather(weatherData));
            rl.prompt();
          })
          .catch(err => {
            console.log('Sorry, I could not get a response from Open Weather :(');
            rl.prompt();
          });
        break;
        case 'WeatherForecast':
          console.log('Oh, let me check that for you...');
          weather.weatherForecast(data.entities.city)
            .then(weatherData => {
              console.log('>>' + parser.parseWeatherForecast(weatherData, data.entities.time));
              rl.prompt();
            })
            .catch(err => {
              console.log(err);
              console.log('Sorry, I could not get a response from Open Weather :(');
              rl.prompt();
            });
          break;
      case 'Thanks':
        console.log('You are welcome! :)')
        rl.prompt();
        break;
      default: {
        console.log("I do not know what you mean :(");
        rl.prompt();
      }
    }
  });
})
