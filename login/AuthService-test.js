describe('DanMail', function() {

  beforeEach(module('DanMail'));

  describe('authService.authorize', function() {

    var localStorageService, AuthService;
    var login = 1;
    var pass = 1;

    beforeEach(inject(function(_AuthService_, _localStorageService_) {

      localStorageService = _localStorageService_;
      AuthService = _AuthService_;

      spyOn(localStorageService, 'get').and.returnValue(false);
      spyOn(localStorageService, 'set').and.returnValue(true);

    }));

    it('should return true for (1,1) user', inject(function(AuthService) {

      expect(AuthService.authorize(login, pass)).toBe(true);

    }));


    it('should return false for (2,2) user', inject(function(AuthService) {

      expect(AuthService.authorize(2, 4)).toBe(false);

    }));

    it('should return isLogin=true after authorize', inject(function(AuthService) {

      AuthService.authorize(login, pass)
      expect(AuthService.isAuthorized()).toBe(true);

    }));

    it('should call saveToLocalStorage isLogin=true', inject(function(AuthService) {

      AuthService.authorize(login, pass)
      expect(localStorageService.set).toHaveBeenCalled();

    }));

    it('should logOut isLogin=false', inject(function(AuthService) {

      AuthService.logOut()
      expect(AuthService.isAuthorized()).toBe(false);

    }));


  });

});
