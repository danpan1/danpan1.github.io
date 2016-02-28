'use strict'

import welcome from './welcome';
// import testTmpl from './test.html';
welcome("home");
// let test = './test.html'

exports.welcome = welcome;
exports.test = require('./test.html');
