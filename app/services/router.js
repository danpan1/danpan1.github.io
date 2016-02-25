'use strict'
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  })

  .state('app', {
    abstract: true,
    templateUrl: 'app/app.html'
  })


  .state('app.mail', {
      url: '/mail/:mailBox',
      template: '<mail></mail>',
      resolve: {
        messagesX: function (messagesService) {
          return messagesService.get()
        }
      }
    })
    .state('app.mail.read', {
      url: '/:messageId',
      template: '<message></message>'
    })



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


  $urlRouterProvider.otherwise('mail/inbox');
});

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

