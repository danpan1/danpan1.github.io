'use strict'
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('app', {
      abstract: true,
      templateUrl: 'app.html'
    })
    .state('app.mail', {
      reloadOnSearch: false,
      // abstract: true,
      url: '/mail/:mailBox',
      template: '<mail></mail>',
      resolve: {
        messagesX: function (messagesService) {
          if (!messagesService.isDataReceived()) {
            return messagesService.get()
              .then((data) => {
                console.log("resolve mail messages")
              }, function (reason) {
                console.log("messagesService fail request");
              }, function (update) {
                console.log('Got notification: ' + update);
              });
          }
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
      template: '<ui-view/>'
    })
    .state('app.contacts.list', {
      url: '/list',
      template: '<contacts-page></contacts-page>'
    })
    .state('app.contacts.edit', {
      url: '/:contactId/edit',
      template: '<contact></contact>'
    })


  $urlRouterProvider.otherwise('mail');
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

