"use strict";

// import angular from "angular";
// import "angular-mocks/angular-mocks";
import "./login";
import "./mail";
import AuthService from './login/AuthService.js';
import saveStateService from './services/saveStateService.js';

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

app.service('AuthService', ['localStorageService', AuthService])
app.service('saveStateService', ['$stateParams', '$state', saveStateService])

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider.state('app', {
    abstract: true,
    template: appTempalte
  })

  // $urlRouterProvider.otherwise('mail/inbox');

});

app.config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });

}]);

app.run(function($rootScope, $state, $stateParams, AuthService, saveStateService) {

  $rootScope.$on('$stateChangeStart', function(event, toState, fromParams) {

    console.log('toState', toState, 'fromParams', fromParams);
    console.log(!AuthService.isAuthorized());
    console.log(!AuthService.isAuthorized() && toState.name !== 'login');
    // debugger
    if (!AuthService.isAuthorized() && toState.name !== 'login') {

      saveStateService.save(fromParams.mailBox, fromParams.messageId);

      event.preventDefault();
      alert("Please login");
      $state.go('login');
    }

  })

})

app.controller('Main', ['AuthService', function(AuthService) {
  this.logOut = () => AuthService.logOut();
}]);

app.run(($httpBackend) => {
  $httpBackend.whenGET(/\.html$/)
    .passThrough();
  $httpBackend.whenGET('/mail')
    .respond(window.mocks.messages);
  $httpBackend.whenGET('/contacts')
    //   // .respond(404,'');
    .respond(window.mocks.contacts);
  // $httpBackend.whenGET('/contacts/:id')
  //   .respond(function (method, url, data, headers, params) {
  //     return [200, window.mocks.contacts[Number(params.id)]];
  //   });
});

export default app;

