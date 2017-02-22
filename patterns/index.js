'use strinct';

const patternDictionary = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey|Hola)\\b',
  intent: 'Hello'
}, {
  pattern: '\\b(Bye|See you later|Adios|Exit)\\b',
  intent: 'Bye'
}];

module.exports = patternDictionary;
