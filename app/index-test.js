describe('DanMail', function() {

  beforeEach(module('DanMail'));



  describe('Main controller', function() {

    var controller, Calc;

    beforeEach(inject(function($controller, _AuthService_) {

      var localStorageService, AuthService;
      var login = 1;
      var pass = 1;

      AuthService = _AuthService_;
      spyOn(AuthService, 'logOut');
      mainController = $controller('Main', { AuthService: AuthService });
    }));


    it('should call AuthService.logOut', inject(function(AuthService) {

      mainController.logOut();
      expect(AuthService.logOut).toHaveBeenCalled();

    }));

  });

});
