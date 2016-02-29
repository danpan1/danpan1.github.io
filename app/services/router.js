'use strict'
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server




  .state('app.contacts', {
      url: '/contacts',
      abstract: true,
      template: '<ui-view/>',
      resolve: {
        contacts: function (contactsService) {
          return contactsService.getAll();
        }
      }
    })
    .state('app.contacts.list', {
      url: '/list',
      template: '<contacts-page></contacts-page>'

    })
    .state('app.contacts.edit', {
      url: '/:contactId/edit',
      template: '<contact></contact>'
    })



