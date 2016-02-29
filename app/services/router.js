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



app.run(function ($rootScope, $state, $stateParams, AuthService, saveStateService) {

  $rootScope.$on('$stateChangeStart', function (event, toState, fromParams) {

    // console.log(toState, fromParams);
    if (!AuthService.isAuthorized() && toState.name !== 'login') {

      saveStateService.save(fromParams.mailBox, fromParams.messageId);

      event.preventDefault();
      alert("Вы должны авторизоваться");
      $state.go('login');
    }

  })

})

