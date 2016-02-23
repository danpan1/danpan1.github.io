app.service('AuthService', function(localStorageService) {
  var isLogin = false;

  this.checkLocalStorage = () => {
    if (localStorageService.get("isAuthorized")) {
      isLogin = true;
    }
  }

  this.checkLocalStorage();
  
  this.authorize = (login, password) => {

    if (login == 1 && password == 1) {
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
});
