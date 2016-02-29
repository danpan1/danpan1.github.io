const loginController = function($state, AuthService) {

console.log("loginController")
  if (AuthService.isAuthorized) {
    // $state.go('app.mail', { mailBox: 'inbox' })
  }

  // this.doLogin = (login, password) => {
  this.doLogin = () => {
    // login = this.login;
    // password = this.password;

console.log("loginController2")
    if (AuthService.authorize(this.login, this.password)) {
      // $state.go('app.mail', { mailBox: 'inbox' })
      alert(" Correct ")
    } else {
      alert("Wrong password")
    }

  }

}

export default loginController;

