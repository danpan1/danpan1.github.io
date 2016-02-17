describe('DanMail', function() {

  beforeEach(module('DanMail'));

  describe('login', function() {

    var state, AuthService, login;

    beforeEach(inject(function(_AuthService_, _$state_, $controller) {
      AuthService = _AuthService_;
      state = _$state_;


      spyOn(AuthService, 'authorize').and.returnValue(true);
      spyOn(state, 'go').and.returnValue(true);
      login = $controller('login', { AuthService: AuthService, $state: state });

    }));

    it('should call state.go', inject(function(AuthService, state) {

      // login.doLogin(1, 1);
      expect(state.go).toHaveBeenCalled();

    }));

    // describe('login controller', function() {

    //   var controller, Calc;

    //   beforeEach(inject(function($controller, _Calc_) {
    //     Calc = _Calc_;
    //     spyOn(Calc, 'sum').and.returnValue(7);
    //     controller = $controller('MainController', { Calc: Calc });
    //   }));


    //   it('should do the sum', inject(function(Calc) {
    //     controller.doCalculations();
    //     expect(Calc.sum).toHaveBeenCalled();
    //   }));

    //   it('should do the sum', inject(function() {
    //     controller.doCalculations();
    //     expect(controller.result).toBe(7);
    //   }));
    // });



  });

});
