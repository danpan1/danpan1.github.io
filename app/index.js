"use strict";

// import angular from "angular";
// import "angular-mocks/angular-mocks";
// import "./login";
// import LocalStorageModule from 'angular-local-storage';
import angular from 'angular';
import uirouter from 'angular-ui-router';

// var testsContext = require.context(".", true, /.spec$/);
// testsContext.keys().forEach(testsContext);


var app = angular.module("DanMail", [
  // 'LocalStorageModule',
  'uirouter',
  // 'ngMockE2E',
  // 'restangular',
  // 'login'
]);

// app.controller('Main', function() {
//   // this.logOut = () => AuthService.logOut();
// });


export default app;
// app.filter('getByTitle', function () {
//   return function (input, title) {
//     var i = 0,
//       len = input.length;
//     for (; i < len; i++) {
//       console.log("input", input);
//       console.log("input", input.title);
//       console.log("title", title);
//       if (input[i].title.toLowerCase() == title) {
//         return input[i];
//       }
//     }
//     return null;
//   }
// });

