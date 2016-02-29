const loginController = function($state, AuthService) {

  if (AuthService.isAuthorized()) {
    $state.go('app.mail', { mailBox: 'inbox' })
  }

  this.doLogin = () => {

    if (AuthService.authorize(this.login, this.password)) {
      $state.go('app.mail', { mailBox: 'inbox' })
      console.log(" Correct ")
    } else {
      alert("Wrong password")
    }

  }

}

export default loginController;

