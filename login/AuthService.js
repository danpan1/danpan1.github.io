app.service('AuthService', function() {
  
  var isLogin = false;

  this.authorize = (login, password) => {

    if (login == 1 && password == 1) {
      isLogin = true;
    } else {
      isLogin = false;
    }
    return isLogin;
    
  }

  this.logOut = () => {
    isLogin = false;
  }

  this.isAuthorized = () => isLogin;
});
