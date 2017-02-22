'use strict';

const patterns = require('../patterns');
const XRegExp = require('xregexp');

let createEntity = (str, pattern) => {
  return XRegExp.exec(str, XRegExp(pattern, "i"));
}

let matchPattern = (str, cb) => {
  let result = patterns.find(item => {
    if(XRegExp.test(str, XRegExp(item.pattern, "i")))
      return true
  });
  if(result) {
    return cb({
      intent: result.intent,
      entities: createEntity(str, result.pattern)
    })
  } else {
    return cb({});
  }
};

module.exports = matchPattern;
