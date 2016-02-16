describe('myApp', function() {

  beforeEach(module('myApp'));

  describe('service', function() {

    it('should do the sum', inject(function(Calc) {
      expect(Calc.sum(3,4)).toBe(7);
    }));
  });

  describe('controller', function() {

    var controller, Calc;
    
    beforeEach(inject(function($controller, _Calc_) {
      Calc = _Calc_;
      spyOn(Calc, 'sum').and.returnValue(7);
      controller = $controller('MainController', { Calc: Calc});
    }));
    
    
    it('should do the sum', inject(function(Calc) {
      controller.doCalculations();
      expect(Calc.sum).toHaveBeenCalled();
    }));

    it('should do the sum', inject(function() {
      controller.doCalculations();
      expect(controller.result).toBe(7);
    }));
  });


  describe('service with $http', function() {

    var UserService,
      $httpBackend,
      mockUsers = [{name: 'John'}];

    beforeEach(inject(function(_$httpBackend_, _UserService_) {
      $httpBackend = _$httpBackend_;
      UserService = _UserService_;

      $httpBackend.whenGET('/users').respond(mockUsers);
      $httpBackend.whenGET('/users/1').respond(mockUsers[0]);
    }));

    it('should get one user', function(done) {
      UserService.getOne(1).then(function(user) {
        expect(user.name).toBe(mockUsers[0].name);
        done();
      });

      $httpBackend.flush();
    });
  });

});