describe('login', function() {

  // beforeEach(angular.mock.module());
  beforeEach(module('app'));

  describe('authService.authorize', function() {

    var localStorageService, AuthService;
    var login = 1;
    var pass = 1;

    beforeEach(angular.mock.inject(function(_AuthService_, _localStorageService_) {

      localStorageService = _localStorageService_;
      AuthService = _AuthService_;

      spyOn(localStorageService, 'get').and.returnValue(false);
      spyOn(localStorageService, 'set').and.returnValue(true);

    }));

    it('should return true for (1,1) user', angular.mock.inject(function(AuthService) {

      expect(AuthService.authorize(login, pass)).toBe(true);

    }));


    it('should return false for (2,2) user', angular.mock.inject(function(AuthService) {

      expect(AuthService.authorize(2, 4)).toBe(false);

    }));

    it('should return isLogin=true after authorize', angular.mock.inject(function(AuthService) {

      AuthService.authorize(login, pass)
      expect(AuthService.isAuthorized()).toBe(true);

    }));

    it('should call saveToLocalStorage isLogin=true', angular.mock.inject(function(AuthService) {

      AuthService.authorize(login, pass)
      expect(localStorageService.set).toHaveBeenCalled();

    }));

    it('should logOut isLogin=false', angular.mock.inject(function(AuthService) {

      AuthService.logOut()
      expect(AuthService.isAuthorized()).toBe(false);

    }));


  });

});
