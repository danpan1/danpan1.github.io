'use strict'
app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true); // think about rewrite rules for server

  $stateProvider
    .state('mail', {
      reloadOnSearch: false,
      // abstract: true,
      url: '/mail/:mailBox/:messageId',
      template: '<mail></mail>',
      resolve: {
        messagesX: function(messagesService) {
          if (!messagesService.isDataReceived()) {
            return messagesService.get().then((data) => {
              console.log("resolve mail messages")
            }, function(reason) {
              console.log("messagesService fail request");
            }, function(update) {
              console.log('Got notification: ' + update);
            });
          }
        }

      }
    })
    .state('contacts', {
      url: '/contacts',
      template: '<contacts-page></contacts-page>'
    })
    .state('contacts.add', {
      url: '/:add',
      template: '<contact></contact>'
    })
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })


  $urlRouterProvider.otherwise('mail/inbox');
});

app.run(function($rootScope, $state, $stateParams, AuthService, saveStateService) {

  $rootScope.$on('$stateChangeStart', function(event, toState, fromParams) {

    if (!AuthService.isAuthorized() && toState.name !== 'login') {

      saveStateService.save(fromParams.mailBox,fromParams.messageId);

      event.preventDefault();
      alert("Вы должны авторизоваться");
      $state.go('login');
    }

  })
  
})
