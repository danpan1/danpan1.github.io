app.directive('login', function() {
  return {
    template: '<input ng-model="login.login" placeholder="1"><input ng-model="login.password" placeholder="1"><button ng-click="login.doLogin(login.login, login.password)">login</button>',
    controllerAs: "login",

    //почему тут был раньше link? с контроллером не то чето? зачем вообще link

    controller: function(AuthService, $state) {

      this.doLogin = (login, password) => {

        if (AuthService.authorize(login, password)) {
          $state.go('mail')
        } else {
          alert("Wrong password")
        }

      }

    }
  }
});
