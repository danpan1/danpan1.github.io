"use strict";

// import angular from "angular";
// import "angular-mocks/angular-mocks";
import "./login";
// import LocalStorageModule from 'angular-local-storage';
// import angular from 'angular';
// import uirouter from 'angular-ui-router';

// var testsContext = require.context(".", true, /.spec$/);
// testsContext.keys().forEach(testsContext);


var app = angular.module("DanMail", [
  'LocalStorageModule',
  'ui.router',
  'ngMockE2E',
  'restangular',
  'login'
]);

app.controller('Main', function() {
//   // this.logOut = () => AuthService.logOut();
});


export default app;