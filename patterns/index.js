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
  pattern: '\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
}];

module.exports = patternDictionary;
