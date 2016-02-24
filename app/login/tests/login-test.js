describe('DanMail', function () {

  beforeEach(module('DanMail'));

  describe('login', function () {

    var state, AuthService, login;

    beforeEach(inject(function (_AuthService_, _$state_, $controller) {
      AuthService = _AuthService_;
      state = _$state_;


      spyOn(AuthService, 'authorize')
        .and.returnValue(true);
      spyOn(AuthService, 'isAuthorized')
        .and.returnValue(true);
      spyOn(state, 'go')
        .and.returnValue(true);

      login = $controller('login', { AuthService: AuthService, $state: state });

    }));

    it('should call AuthService.isAuthorized before all', inject(function (AuthService, state) {

      // expect(state.go)
      // .toHaveBeenCalled();
      expect(AuthService.isAuthorized)
        .toHaveBeenCalled();

    }));


  });

});

