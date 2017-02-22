'use strinct';

const patternDictionary = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey|Hola)\\b',
  intent: 'Hello'
}, {
  pattern: '\\b(Bye|See you later|Adios|Exit)\\b',
  intent: 'Bye'
}, {
  pattern: '\\b(Thank you|thanks)\\b',
  intent: 'Thanks'
}, {
  pattern: '\\b(weather)\\b\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
}, {
  pattern:'\\b(?<weather>hot|cold|rain|rainy|sunny|snow|thunderstorms|windy|drizzle)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\safter\\tomorrow|tomorrow|today)$',
  intent: 'WeatherForecast'
}];

module.exports = patternDictionary;
