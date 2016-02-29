const loginController = function($state, AuthService) {


  if (AuthService.isAuthorized) {
    // $state.go('app.mail', { mailBox: 'inbox' })
  }

  // this.doLogin = (login, password) => {
  this.doLogin = () => {
    login = this.login;
    password = this.password;

    if (AuthService.authorize(login, password)) {
      // $state.go('app.mail', { mailBox: 'inbox' })
      alert(" password")
    } else {
      alert("Wrong password")
    }

  }

}

export default loginController;

