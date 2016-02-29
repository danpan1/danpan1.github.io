var app =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// import angular from "angular";
	// import "angular-mocks/angular-mocks";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	// import LocalStorageModule from 'angular-local-storage';
	// import angular from 'angular';
	// import uirouter from 'angular-ui-router';

	// var testsContext = require.context(".", true, /.spec$/);
	// testsContext.keys().forEach(testsContext);

	var app = angular.module("DanMail", ['LocalStorageModule', 'ui.router', 'ngMockE2E', 'restangular', 'login']);

	app.controller('Main', function () {
	  //   // this.logOut = () => AuthService.logOut();
	});

	exports.default = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import angular from 'angular';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AuthService = __webpack_require__(2);

	var _AuthService2 = _interopRequireDefault(_AuthService);

	var _login = __webpack_require__(3);

	var _login2 = _interopRequireDefault(_login);

	var _loginController = __webpack_require__(4);

	var _loginController2 = _interopRequireDefault(_loginController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var login = angular.module('login', []);

	login.config(['$stateProvider', function ($stateProvider) {

	  $stateProvider.state('login', {
	    url: '/login',
	    template: '<login></login>'
	  });
	}]);

	login.service('AuthService', ['localStorageService', _AuthService2.default]);

	login.directive('login', function () {
	  return {
	    restrict: "E",
	    bindToController: true,
	    template: _login2.default,
	    controllerAs: "login",
	    controller: ['$state', 'AuthService', _loginController2.default]
	  };
	});

	exports.default = login;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AuthService = function AuthService(localStorageService) {
	  var isLogin = false;

	  if (localStorageService.get("isAuthorized")) {
	    isLogin = true;
	  }

	  this.authorize = function (login, password) {

	    if (login == 'admin' && password == 123) {
	      localStorageService.set("isAuthorized", true);
	      isLogin = true;
	    } else {
	      isLogin = false;
	    }
	    return isLogin;
	  };

	  this.logOut = function () {
	    isLogin = false;
	    localStorageService.set("isAuthorized", false);
	  };

	  this.isAuthorized = function () {
	    return isLogin;
	  };
	};

	exports.default = AuthService;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1=" <div class=\"top-content\"> <div class=\"inner-bg\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-8 col-sm-offset-2 text\"> </div> </div> <div class=\"row\"> <div class=\"col-sm-6 col-sm-offset-3 form-box\"> <div class=\"form-top\"> <div class=\"form-top-left\"> <h3>Login to Mail app</h3> <p>Enter username : <strong>admin</strong><br> and password : <strong>123</strong></p> </div> <div class=\"form-top-right\"> <i class=\"fa fa-key\"></i> </div> </div> <div class=\"form-bottom\"> <form role=\"form\" class=\"login-form\" ng-submit=\"login.doLogin()\"> <div class=\"form-group\"> <label class=\"sr-only\" for=\"form-username\">Username</label> <input type=\"text\" name=\"form-username\" placeholder=\"Username...\" class=\"form-username form-control\" id=\"form-username\" ng-model=\"login.login\"> </div> <div class=\"form-group\"> <label class=\"sr-only\" for=\"form-password\">Password</label> <input type=\"password\" name=\"form-password\" placeholder=\"Password...\" class=\"form-password form-control\" id=\"form-password\" ng-model=\"login.password\"> </div> <button type=\"submit\" class=\"btn\">Sign in!</button> </form> </div> </div> </div> <div class=\"row\"> <div class=\"col-sm-6 col-sm-offset-3 social-login\"> </div> </div> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("login/views/login.html",v1)}]);
	module.exports=v1;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var loginController = function loginController($state, AuthService) {
	  var _this = this;

	  console.log("loginController");
	  if (AuthService.isAuthorized) {}
	  // $state.go('app.mail', { mailBox: 'inbox' })


	  // this.doLogin = (login, password) => {
	  this.doLogin = function () {
	    // login = this.login;
	    // password = this.password;

	    console.log("loginController2");
	    if (AuthService.authorize(_this.login, _this.password)) {
	      // $state.go('app.mail', { mailBox: 'inbox' })
	      alert(" Correct ");
	    } else {
	      alert("Wrong password");
	    }
	  };
	};

	exports.default = loginController;

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9BdXRoU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpbi92aWV3cy9sb2dpbi5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQsdUI7Ozs7OztBQ3hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx5Qjs7Ozs7O0FDM0NBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCOzs7Ozs7QUNqQ0E7QUFDQSxNQUFLO0FBQ0wsVUFBUztBQUNUO0FBQ0EsNENBQTJDLG1DQUFtQztBQUM5RSxtQjs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNEIsbUJBQW1COzs7QUFHL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGltcG9ydCBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XG4vLyBpbXBvcnQgXCJhbmd1bGFyLW1vY2tzL2FuZ3VsYXItbW9ja3NcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxucmVxdWlyZShcIi4vbG9naW5cIik7XG5cbi8vIGltcG9ydCBMb2NhbFN0b3JhZ2VNb2R1bGUgZnJvbSAnYW5ndWxhci1sb2NhbC1zdG9yYWdlJztcbi8vIGltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuLy8gaW1wb3J0IHVpcm91dGVyIGZyb20gJ2FuZ3VsYXItdWktcm91dGVyJztcblxuLy8gdmFyIHRlc3RzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi5cIiwgdHJ1ZSwgLy5zcGVjJC8pO1xuLy8gdGVzdHNDb250ZXh0LmtleXMoKS5mb3JFYWNoKHRlc3RzQ29udGV4dCk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIkRhbk1haWxcIiwgWydMb2NhbFN0b3JhZ2VNb2R1bGUnLCAndWkucm91dGVyJywgJ25nTW9ja0UyRScsICdyZXN0YW5ndWxhcicsICdsb2dpbiddKTtcblxuYXBwLmNvbnRyb2xsZXIoJ01haW4nLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgLy8gdGhpcy5sb2dPdXQgPSAoKSA9PiBBdXRoU2VydmljZS5sb2dPdXQoKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhcHA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQXV0aFNlcnZpY2UgPSByZXF1aXJlKCcuL0F1dGhTZXJ2aWNlLmpzJyk7XG5cbnZhciBfQXV0aFNlcnZpY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXV0aFNlcnZpY2UpO1xuXG52YXIgX2xvZ2luID0gcmVxdWlyZSgnLi92aWV3cy9sb2dpbi5odG1sJyk7XG5cbnZhciBfbG9naW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9naW4pO1xuXG52YXIgX2xvZ2luQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbG9naW5Db250cm9sbGVyLmpzJyk7XG5cbnZhciBfbG9naW5Db250cm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2luQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBsb2dpbiA9IGFuZ3VsYXIubW9kdWxlKCdsb2dpbicsIFtdKTtcblxubG9naW4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB0ZW1wbGF0ZTogJzxsb2dpbj48L2xvZ2luPidcbiAgfSk7XG59XSk7XG5cbmxvZ2luLnNlcnZpY2UoJ0F1dGhTZXJ2aWNlJywgWydsb2NhbFN0b3JhZ2VTZXJ2aWNlJywgX0F1dGhTZXJ2aWNlMi5kZWZhdWx0XSk7XG5cbmxvZ2luLmRpcmVjdGl2ZSgnbG9naW4nLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6IFwiRVwiLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgdGVtcGxhdGU6IF9sb2dpbjIuZGVmYXVsdCxcbiAgICBjb250cm9sbGVyQXM6IFwibG9naW5cIixcbiAgICBjb250cm9sbGVyOiBbJyRzdGF0ZScsICdBdXRoU2VydmljZScsIF9sb2dpbkNvbnRyb2xsZXIyLmRlZmF1bHRdXG4gIH07XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbG9naW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xvZ2luL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgQXV0aFNlcnZpY2UgPSBmdW5jdGlvbiBBdXRoU2VydmljZShsb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gIHZhciBpc0xvZ2luID0gZmFsc2U7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiaXNBdXRob3JpemVkXCIpKSB7XG4gICAgaXNMb2dpbiA9IHRydWU7XG4gIH1cblxuICB0aGlzLmF1dGhvcml6ZSA9IGZ1bmN0aW9uIChsb2dpbiwgcGFzc3dvcmQpIHtcblxuICAgIGlmIChsb2dpbiA9PSAnYWRtaW4nICYmIHBhc3N3b3JkID09IDEyMykge1xuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJpc0F1dGhvcml6ZWRcIiwgdHJ1ZSk7XG4gICAgICBpc0xvZ2luID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNMb2dpbiA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNMb2dpbjtcbiAgfTtcblxuICB0aGlzLmxvZ091dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpc0xvZ2luID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJpc0F1dGhvcml6ZWRcIiwgZmFsc2UpO1xuICB9O1xuXG4gIHRoaXMuaXNBdXRob3JpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc0xvZ2luO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXV0aFNlcnZpY2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xvZ2luL0F1dGhTZXJ2aWNlLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCIgPGRpdiBjbGFzcz1cXFwidG9wLWNvbnRlbnRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJpbm5lci1iZ1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMiB0ZXh0XFxcIj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtc20tb2Zmc2V0LTMgZm9ybS1ib3hcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLXRvcFxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tdG9wLWxlZnRcXFwiPiA8aDM+TG9naW4gdG8gTWFpbCBhcHA8L2gzPiA8cD5FbnRlciB1c2VybmFtZSA6IDxzdHJvbmc+YWRtaW48L3N0cm9uZz48YnI+IGFuZCBwYXNzd29yZCA6IDxzdHJvbmc+MTIzPC9zdHJvbmc+PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS10b3AtcmlnaHRcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEta2V5XFxcIj48L2k+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ib3R0b21cXFwiPiA8Zm9ybSByb2xlPVxcXCJmb3JtXFxcIiBjbGFzcz1cXFwibG9naW4tZm9ybVxcXCIgbmctc3VibWl0PVxcXCJsb2dpbi5kb0xvZ2luKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJzci1vbmx5XFxcIiBmb3I9XFxcImZvcm0tdXNlcm5hbWVcXFwiPlVzZXJuYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZvcm0tdXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZS4uLlxcXCIgY2xhc3M9XFxcImZvcm0tdXNlcm5hbWUgZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZm9ybS11c2VybmFtZVxcXCIgbmctbW9kZWw9XFxcImxvZ2luLmxvZ2luXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcInNyLW9ubHlcXFwiIGZvcj1cXFwiZm9ybS1wYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImZvcm0tcGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZC4uLlxcXCIgY2xhc3M9XFxcImZvcm0tcGFzc3dvcmQgZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZm9ybS1wYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcImxvZ2luLnBhc3N3b3JkXFxcIj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuXFxcIj5TaWduIGluITwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtMyBzb2NpYWwtbG9naW5cXFwiPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImxvZ2luL3ZpZXdzL2xvZ2luLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbG9naW4vdmlld3MvbG9naW4uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGxvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uIGxvZ2luQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgY29uc29sZS5sb2coXCJsb2dpbkNvbnRyb2xsZXJcIik7XG4gIGlmIChBdXRoU2VydmljZS5pc0F1dGhvcml6ZWQpIHt9XG4gIC8vICRzdGF0ZS5nbygnYXBwLm1haWwnLCB7IG1haWxCb3g6ICdpbmJveCcgfSlcblxuXG4gIC8vIHRoaXMuZG9Mb2dpbiA9IChsb2dpbiwgcGFzc3dvcmQpID0+IHtcbiAgdGhpcy5kb0xvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIGxvZ2luID0gdGhpcy5sb2dpbjtcbiAgICAvLyBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG5cbiAgICBjb25zb2xlLmxvZyhcImxvZ2luQ29udHJvbGxlcjJcIik7XG4gICAgaWYgKEF1dGhTZXJ2aWNlLmF1dGhvcml6ZShfdGhpcy5sb2dpbiwgX3RoaXMucGFzc3dvcmQpKSB7XG4gICAgICAvLyAkc3RhdGUuZ28oJ2FwcC5tYWlsJywgeyBtYWlsQm94OiAnaW5ib3gnIH0pXG4gICAgICBhbGVydChcIiBDb3JyZWN0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJXcm9uZyBwYXNzd29yZFwiKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsb2dpbkNvbnRyb2xsZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xvZ2luL2xvZ2luQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=