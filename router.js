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
          return messagesService.get().then((data) => {
            // console.log("resolve mail messages")
          }, function(reason) {
            console.log("messagesService fail request");
          }, function(update) {
            console.log('Got notification: ' + update);
          });
        },
        messagesX2: function(messagesService) {
          return { asdasd: 123 }
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

app.run(function($rootScope, $state, $stateParams, AuthService, mailStateService) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (!AuthService.isAuthorized() && toState.name !== 'login') {
      mailStateService.save();
      console.log($stateParams.mailBox, "stateParams.mailBox");
      console.log(mailStateService.get(), "router");
      event.preventDefault();
      alert("Вы должны авторизоваться");
      $state.go('login');
    }
  })
})
