'use strict'
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider
    .state('mail', {
      url: '/mail',
      template: '<mail></mail>'
    })
    .state('contacts', {
      url: '/contacts',
      template: '<contacts-page></contacts-page>'
    })
    .state('contacts.add', {
      url: '/:add',
      template: '<contact></contact>'
    })


  // $urlRouterProvider.otherwise('users');
});