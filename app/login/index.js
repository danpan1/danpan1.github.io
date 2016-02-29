'use strict';
// import angular from 'angular';

const login = angular.module('login', []);

login.config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });

}]);

import AuthService from './AuthService.js';
import loginTemplate from './views/login.html';
import loginController from './loginController.js';


login.service('AuthService', ['localStorageService', AuthService])



login.directive('login', function() {
  return {
    restrict: "E",
    bindToController: true,
    template: loginTemplate,
    controllerAs: "login",
    controller: ['$state', 'AuthService', loginController]
  }
})

export default login;

