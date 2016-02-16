app.directive('login', function(AuthService, $state) {
  return {
    template: '<input ng-model="login" placeholder="1"><input ng-model="password" placeholder="1"><button ng-click="doLogin(login, password)">login</button>',
    link: function(scope) {

      scope.doLogin = (login, password) => {
        if (AuthService.authorize(login, password)) {
          $state.go('mail')
        }
      }
      
    }
  }
});

