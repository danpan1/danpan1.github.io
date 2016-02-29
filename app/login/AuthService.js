const AuthService = function(localStorageService) {
  var isLogin = false;

  if (localStorageService.get("isAuthorized")) {
    isLogin = true;
  }

  this.authorize = (login, password) => {

    if (login == 'admin' && password == 123) {
      localStorageService.set("isAuthorized", true)
      isLogin = true;
    } else {
      isLogin = false;
    }
    return isLogin;

  }

  this.logOut = () => {
    isLogin = false;
    localStorageService.set("isAuthorized", false)
  }

  this.isAuthorized = () => isLogin;
}

export default AuthService;