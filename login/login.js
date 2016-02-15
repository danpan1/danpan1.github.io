app.directive('login', function(AuthService, $state) {
  return {
    template: '<input ng-model="login"><input ng-model="password"><button ng-click="doLogin(login, password)">login</button>',
    link: function(scope) {
      scope.doLogin = (login, password) => {
        if (AuthService.authorize(login, password)) {
          $state.go('mail')
        }
      }
    }
  }
});

