"use strict";
var app = angular.module("DanMail", ['LocalStorageModule', 'ui.router', 'ngMockE2E', 'restangular']);

app.controller('Main', function (AuthService) {
  this.logOut = () => AuthService.logOut();
});


app.filter('getByTitle', function () {
  return function (input, title) {
    var i = 0,
      len = input.length;
    for (; i < len; i++) {
      console.log("input", input);
      console.log("input", input.title);
      console.log("title", title);
      if (input[i].title.toLowerCase() == title) {
        return input[i];
      }
    }
    return null;
  }
});


app.run(($httpBackend) => {
  $httpBackend.whenGET(/\.html$/)
    .passThrough();
  $httpBackend.whenGET('/mail')
    .respond(window.mocks.messages);
});

