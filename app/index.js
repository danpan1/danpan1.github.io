"use strict";

// import angular from "angular";
// import "angular-mocks/angular-mocks";
import "./login";
import "./mail";
import messages from "./services/messages.mock.js";
import contacts from "./services/contacts.mock.js";
import appTempalte from "./app.html";
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
  'login',
  'mail'
]);



app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider.state('app', {
    abstract: true,
    template: appTempalte
  })

  $urlRouterProvider.otherwise('mail/inbox');

});

app.controller('Main', function() {
  //   // this.logOut = () => AuthService.logOut();
});

app.run(($httpBackend) => {
  $httpBackend.whenGET(/\.html$/)
    .passThrough();
  $httpBackend.whenGET('/mail')
    .respond(messages);
  $httpBackend.whenGET('/contacts')
    //   // .respond(404,'');
    .respond(contacts);
  // $httpBackend.whenGET('/contacts/:id')
  //   .respond(function (method, url, data, headers, params) {
  //     return [200, window.mocks.contacts[Number(params.id)]];
  //   });
});

export default app;

