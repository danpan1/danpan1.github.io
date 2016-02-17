"use strict";
var app = angular.module("DanMail", ['LocalStorageModule', 'ui.router']);

app.controller('Main', function(AuthService) {
  this.logOut = () => AuthService.logOut();
});
