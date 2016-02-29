var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// import angular from "angular";
	// import "angular-mocks/angular-mocks";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	__webpack_require__(4);

	var _AuthService = __webpack_require__(15);

	var _AuthService2 = _interopRequireDefault(_AuthService);

	var _saveStateService = __webpack_require__(16);

	var _saveStateService2 = _interopRequireDefault(_saveStateService);

	var _app = __webpack_require__(17);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import LocalStorageModule from 'angular-local-storage';
	// import angular from 'angular';
	// import uirouter from 'angular-ui-router';

	// var testsContext = require.context(".", true, /.spec$/);
	// testsContext.keys().forEach(testsContext);

	var app = angular.module("DanMail", ['LocalStorageModule', 'ui.router', 'ngMockE2E', 'restangular', 'login', 'mail']);

	app.service('AuthService', ['localStorageService', _AuthService2.default]);
	app.service('saveStateService', ['$stateParams', '$state', _saveStateService2.default]);

	app.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {
	  //$locationProvider.html5Mode(true); // think about rewrite rules for server

	  $stateProvider.state('app', {
	    abstract: true,
	    template: _app2.default
	  });

	  // $urlRouterProvider.otherwise('mail/inbox');
	}]);

	app.config(['$stateProvider', function ($stateProvider) {

	  $stateProvider.state('login', {
	    url: '/login',
	    template: '<login></login>'
	  });
	}]);

	app.run(["$rootScope", "$state", "$stateParams", "AuthService", "saveStateService", function ($rootScope, $state, $stateParams, AuthService, saveStateService) {

	  $rootScope.$on('$stateChangeStart', function (event, toState, fromParams) {

	    console.log('toState', toState, 'fromParams', fromParams);
	    console.log(!AuthService.isAuthorized());
	    console.log(!AuthService.isAuthorized() && toState.name !== 'login');
	    // debugger
	    if (!AuthService.isAuthorized() && toState.name !== 'login') {

	      saveStateService.save(fromParams.mailBox, fromParams.messageId);

	      event.preventDefault();
	      alert("Please login");
	      $state.go('login');
	    }
	  });
	}]);

	app.controller('Main', ['AuthService', function (AuthService) {
	  this.logOut = function () {
	    return AuthService.logOut();
	  };
	}]);

	app.run(["$httpBackend", function ($httpBackend) {
	  $httpBackend.whenGET(/\.html$/).passThrough();
	  $httpBackend.whenGET('/mail').respond(window.mocks.messages);
	  $httpBackend.whenGET('/contacts')
	  //   // .respond(404,'');
	  .respond(window.mocks.contacts);
	  // $httpBackend.whenGET('/contacts/:id')
	  //   .respond(function (method, url, data, headers, params) {
	  //     return [200, window.mocks.contacts[Number(params.id)]];
	  //   });
	}]);

	exports.default = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import angular from 'angular';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _login = __webpack_require__(2);

	var _login2 = _interopRequireDefault(_login);

	var _loginController = __webpack_require__(3);

	var _loginController2 = _interopRequireDefault(_loginController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var login = angular.module('login', []);

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

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1=" <div class=\"top-content\"> <div class=\"inner-bg\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-8 col-sm-offset-2 text\"> </div> </div> <div class=\"row\"> <div class=\"col-sm-6 col-sm-offset-3 form-box\"> <div class=\"form-top\"> <div class=\"form-top-left\"> <h3>Login to Mail app</h3> <p>Enter username : <strong>admin</strong><br> and password : <strong>123</strong></p> </div> <div class=\"form-top-right\"> <i class=\"fa fa-key\"></i> </div> </div> <div class=\"form-bottom\"> <form role=\"form\" class=\"login-form\" ng-submit=\"login.doLogin()\"> <div class=\"form-group\"> <label class=\"sr-only\" for=\"form-username\">Username</label> <input type=\"text\" name=\"form-username\" placeholder=\"Username...\" class=\"form-username form-control\" id=\"form-username\" ng-model=\"login.login\"> </div> <div class=\"form-group\"> <label class=\"sr-only\" for=\"form-password\">Password</label> <input type=\"password\" name=\"form-password\" placeholder=\"Password...\" class=\"form-password form-control\" id=\"form-password\" ng-model=\"login.password\"> </div> <button type=\"submit\" class=\"btn\">Sign in!</button> </form> </div> </div> </div> <div class=\"row\"> <div class=\"col-sm-6 col-sm-offset-3 social-login\"> </div> </div> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("login/views/login.html",v1)}]);
	module.exports=v1;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var loginController = function loginController($state, AuthService) {
	  var _this = this;

	  if (AuthService.isAuthorized()) {
	    $state.go('app.mail', { mailBox: 'inbox' });
	  }

	  this.doLogin = function () {

	    if (AuthService.authorize(_this.login, _this.password)) {
	      $state.go('app.mail', { mailBox: 'inbox' });
	      console.log(" Correct ");
	    } else {
	      alert("Wrong password");
	    }
	  };
	};

	exports.default = loginController;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import angular from 'angular';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _messagesService = __webpack_require__(5);

	var _messagesService2 = _interopRequireDefault(_messagesService);

	var _mail = __webpack_require__(6);

	var _mail2 = _interopRequireDefault(_mail);

	var _message = __webpack_require__(7);

	var _message2 = _interopRequireDefault(_message);

	var _messageList = __webpack_require__(8);

	var _messageList2 = _interopRequireDefault(_messageList);

	var _aside = __webpack_require__(10);

	var _aside2 = _interopRequireDefault(_aside);

	var _asideService = __webpack_require__(12);

	var _asideService2 = _interopRequireDefault(_asideService);

	var _mailController = __webpack_require__(13);

	var _mailController2 = _interopRequireDefault(_mailController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mail = angular.module('mail', []);

	mail.config(['$stateProvider', function ($stateProvider) {

	  $stateProvider.state('app.mail', {
	    url: '/mail/:mailBox',
	    template: '<mail></mail>',
	    resolve: {
	      messagesX: ["messagesService", function messagesX(messagesService) {
	        return messagesService.get();
	      }]
	    }
	  }).state('app.mail.read', {
	    url: '/:messageId',
	    template: '<message></message>'
	  });
	}]);

	//TODO корректно ли тут присваивать mail.service или надо app.service
	mail.service('messagesService', ['Restangular', _messagesService2.default]);
	mail.service('asideService', _asideService2.default);

	mail.directive('mail', function () {
	  return {
	    restrict: 'E',
	    scope: {},
	    bindToController: true,
	    template: _mail2.default,
	    controller: ['$http', '$state', '$filter', '$stateParams', 'saveStateService', 'messagesService', _mailController2.default],
	    controllerAs: "mail"
	  };
	});

	mail.directive('messagesList', _messageList2.default);

	mail.directive('message', function () {
	  return {
	    restrict: 'E',
	    scope: {},
	    bindToController: true,
	    controller: ['$stateParams', 'messagesService', function ($stateParams, messagesService) {
	      this.message = messagesService.getOne($stateParams.messageId);
	      console.log(this.message);
	    }],
	    template: _message2.default,
	    controllerAs: "message"
	  };
	});

	mail.directive('aside', ['asideService', 'messagesService', _aside2.default]);

	exports.default = mail;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var messagesService = function messagesService(Restangular) {
	  var _this = this;

	  var isDataReceived = false;

	  this.get = function () {

	    if (isDataReceived) return _this.messages;

	    return Restangular.all('mail').getList().then(function (messages) {
	      console.log("getMock");
	      isDataReceived = true;
	      _this.messages = messages;
	      return messages;
	    });
	  };

	  this.getAll = function () {
	    return this.messages;
	  };

	  this.getOne = function (id) {
	    return this.messages[id];
	  };

	  //count folders ASIDE for bages
	  this.countFolders = function () {
	    if (_this.messages) {
	      var obj = {};
	      _this.messages.forEach(function (value, index) {
	        if (obj[value.folder]) obj[value.folder]++;else obj[value.folder] = 1;
	      });
	      return obj;
	    }
	  };

	  this.isDataReceived = function () {
	    return isDataReceived;
	  };
	};

	exports.default = messagesService;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1=" <div class=\"mail-layout-Aside main-columns col-md-2 list-group\">  <aside folders=\"mail.aside\" call=\"mail.filterByAsideFolder(title)\" countfolders=\"mail.countFolders\"></aside> </div>    <div class=\"main-columns col-md-5 list-group\"> <messages-list></messages-list> </div>   <div class=\"main-columns col-md-5 list-group\"> <ui-view></ui-view>  </div> ";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/mail.html",v1)}]);
	module.exports=v1;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<li class=\"list-group-item\"> {{message.message.name}}</li> <li class=\"list-group-item alert alert-info\"> <p> {{message.message.email}} </p> </li> <li class=\"list-group-item well\"> <p> {{message.message.body}} </p> </li>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/message.html",v1)}]);
	module.exports=v1;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _messagesList = __webpack_require__(9);

	var _messagesList2 = _interopRequireDefault(_messagesList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var messagesList = function messagesList() {
	  return {
	    restrict: 'E',
	    template: _messagesList2.default
	  };
	};

	exports.default = messagesList;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<a class=\"mail-layoyt-messages-list-box list-group-item\" ui-sref=\"app.mail.read({ messageId : '{{value.id}}'})\" ui-sref-active=\"active\" ng-repeat=\"(key, value) in mail.messages | filter:mail.messagesListFilter\" ng-click=\"mail.message = value\">{{value.title}} <h4 class=\"list-group-item-heading\">{{value.email}}</h4> <p class=\"list-group-item-text\">{{value.name}}</p> </a>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/messages-list.html",v1)}]);
	module.exports=v1;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _aside = __webpack_require__(11);

	var _aside2 = _interopRequireDefault(_aside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var aside = function aside(asideService, messagesService) {
	  return {
	    restrict: 'E',
	    scope: {
	      "folders": '='
	    },
	    bindToController: true,
	    controller: ['asideService', '$stateParams', '$filter', function (asideService, $stateParams, $filter) {

	      this.countFolders = messagesService.countFolders();
	      //aside get INBOX, SENT, SPAM, TRASH
	      this.folders = asideService.get();
	    }],
	    template: _aside2.default,
	    controllerAs: "aside"
	  };
	};

	exports.default = aside;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<a ui-sref=\"app.mail({mailBox : value.title.toLowerCase()})\" class=\"list-group-item\" ui-sref-active=\"active\" ng-repeat=\"(index, value) in aside.folders\"> {{value.title}}\n<span class=\"badge\">{{aside.countFolders[value.title.toLowerCase()]}}</span> </a>";
	ngModule.run(["$templateCache",function(c){c.put("mail/views/aside.html",v1)}]);
	module.exports=v1;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var asideService = function asideService() {
	  var _this = this;

	  this.aside = [{
	    "title": "Inbox"
	  }, {
	    "title": "Sent"
	  }, {
	    "title": "Draft"
	  }, {
	    "title": "Trash"
	  }, {
	    "title": "Spam"
	  }];

	  this.get = function () {
	    return _this.aside;
	  };
	};

	exports.default = asideService;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mailController = function mailController($http, $state, $filter, $stateParams, saveStateService, messagesService) {
	  var _this = this;

	  var messageId = parseInt($stateParams.messageId);
	  var mailBox = $stateParams.mailBox;

	  console.log(messageId, mailBox);
	  console.log(saveStateService.get(), "mail");

	  if (!messageId) {
	    messageId = saveStateService.get().messageId;
	  }
	  if (!mailBox) {
	    mailBox = saveStateService.get().mailBox;
	  }

	  console.log(messageId, mailBox);
	  console.log(saveStateService.get(), "mail");

	  if (!mailBox || !messageId) {
	    console.log("no message no mailbox");
	    $state.go("app.mail.read", { 'mailBox': mailBox, 'messageId': messageId });
	  }

	  this.messages = messagesService.getAll();

	  //filter messages by searchText field
	  this.search = function () {
	    _this.message = {};
	    _this.messagesListFilter = _this.searchText;
	  };

	  // TODO
	  //move message to selectedFolder
	  this.move = function (folder) {
	    //присваиваем новый фолдер
	    _this.message.folder = folder;
	    //пересчитываем bages
	    _this.countFolders = messagesService.countFolders();
	    //обнуляем  message активный
	    _this.message = {};
	  };

	  this.filterByAsideFolder = function () {
	    _this.message = {};
	    _this.searchField = "";
	    if (mailBox) {
	      _this.messagesListFilter = {
	        "folder": mailBox.toLowerCase()
	      };
	    };
	  };

	  this.filterByAsideFolder();

	  // console.log(messagesService.getOne(messageId), "messagesService.getOne(messageId)")
	  this.message = messagesService.getOne(messageId);
	  if (this.message.folder.toLowerCase() !== mailBox) {
	    this.message = {};
	  }
	  saveStateService.save(mailBox, messageId);
	};

	exports.default = mailController;

/***/ },
/* 14 */,
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var saveStateService = function saveStateService($stateParams, $state) {
	  var _this = this;

	  this.save = function (mailBox, messageId) {
	    console.log("save saveStateService");
	    _this.mailBox = mailBox;
	    _this.messageId = messageId;
	  };

	  this.get = function () {
	    console.log("get saveStateService");

	    if (!this.mailBox || !this.messageId) {
	      this.mailBox = "inbox";
	      this.messageId = 1;
	    }

	    return {
	      'mailBox': this.mailBox,
	      'messageId': parseInt(this.messageId)
	    };
	  };
	};

	exports.default = saveStateService;

/***/ },
/* 17 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<nav class=\"navbar navbar-default navbar-fixed-top\"> <div class=\"container\"> <a class=\"navbar-brand\" href=\"#\"></a> <ul class=\"nav navbar-nav\"> <li>  </li> <li><a ui-sref=\"app.mail({mailBox : 'inbox'})\" ui-sref-active=\"active\">Mail</a></li> <li><a ui-sref=\"app.contacts.list\" ui-sref-active=\"active\">Contacts</a></li> <li></li> <li> </li> <li>  </li> <li class=\"navbar-right\"> <a ui-sref=\"login\" ng-click=\"main.logOut()\">LOG OUT</a>   </li> </ul> </div> </nav>  <div class=\"container\"> <ui-view>  </ui-view> </div>";
	ngModule.run(["$templateCache",function(c){c.put("danpan1.github.io/app/app.html",v1)}]);
	module.exports=v1;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjVhNTcxYTlmYjgwOTU3NzY3NWQiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vdmlld3MvbG9naW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC92aWV3cy9tYWlsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbC92aWV3cy9tZXNzYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbC9tZXNzYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9tYWlsL3ZpZXdzL21lc3NhZ2VzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWlsL2FzaWRlLmpzIiwid2VicGFjazovLy8uL21haWwvdmlld3MvYXNpZGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWlsL2FzaWRlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWlsL21haWxDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2xvZ2luL0F1dGhTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NhdmVTdGF0ZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7O0FDN0JBO0FBQ0EsTUFBSztBQUNMLFVBQVM7QUFDVCx5TUFBd00sa0JBQWtCO0FBQzFOLDRDQUEyQywyQ0FBMkM7QUFDdEYsbUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmNWE1NzFhOWZiODA5NTc3Njc1ZFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBpbXBvcnQgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xuLy8gaW1wb3J0IFwiYW5ndWxhci1tb2Nrcy9hbmd1bGFyLW1vY2tzXCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnJlcXVpcmUoXCIuL2xvZ2luXCIpO1xuXG5yZXF1aXJlKFwiLi9tYWlsXCIpO1xuXG52YXIgX0F1dGhTZXJ2aWNlID0gcmVxdWlyZShcIi4vbG9naW4vQXV0aFNlcnZpY2UuanNcIik7XG5cbnZhciBfQXV0aFNlcnZpY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXV0aFNlcnZpY2UpO1xuXG52YXIgX3NhdmVTdGF0ZVNlcnZpY2UgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9zYXZlU3RhdGVTZXJ2aWNlLmpzXCIpO1xuXG52YXIgX3NhdmVTdGF0ZVNlcnZpY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2F2ZVN0YXRlU2VydmljZSk7XG5cbnZhciBfYXBwID0gcmVxdWlyZShcIi4vYXBwLmh0bWxcIik7XG5cbnZhciBfYXBwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGltcG9ydCBMb2NhbFN0b3JhZ2VNb2R1bGUgZnJvbSAnYW5ndWxhci1sb2NhbC1zdG9yYWdlJztcbi8vIGltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuLy8gaW1wb3J0IHVpcm91dGVyIGZyb20gJ2FuZ3VsYXItdWktcm91dGVyJztcblxuLy8gdmFyIHRlc3RzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi5cIiwgdHJ1ZSwgLy5zcGVjJC8pO1xuLy8gdGVzdHNDb250ZXh0LmtleXMoKS5mb3JFYWNoKHRlc3RzQ29udGV4dCk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIkRhbk1haWxcIiwgWydMb2NhbFN0b3JhZ2VNb2R1bGUnLCAndWkucm91dGVyJywgJ25nTW9ja0UyRScsICdyZXN0YW5ndWxhcicsICdsb2dpbicsICdtYWlsJ10pO1xuXG5hcHAuc2VydmljZSgnQXV0aFNlcnZpY2UnLCBbJ2xvY2FsU3RvcmFnZVNlcnZpY2UnLCBfQXV0aFNlcnZpY2UyLmRlZmF1bHRdKTtcbmFwcC5zZXJ2aWNlKCdzYXZlU3RhdGVTZXJ2aWNlJywgWyckc3RhdGVQYXJhbXMnLCAnJHN0YXRlJywgX3NhdmVTdGF0ZVNlcnZpY2UyLmRlZmF1bHRdKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7IC8vIHRoaW5rIGFib3V0IHJld3JpdGUgcnVsZXMgZm9yIHNlcnZlclxuXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGU6IF9hcHAyLmRlZmF1bHRcbiAgfSk7XG5cbiAgLy8gJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnbWFpbC9pbmJveCcpO1xufSk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHRlbXBsYXRlOiAnPGxvZ2luPjwvbG9naW4+J1xuICB9KTtcbn1dKTtcblxuYXBwLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEF1dGhTZXJ2aWNlLCBzYXZlU3RhdGVTZXJ2aWNlKSB7XG5cbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCBmcm9tUGFyYW1zKSB7XG5cbiAgICBjb25zb2xlLmxvZygndG9TdGF0ZScsIHRvU3RhdGUsICdmcm9tUGFyYW1zJywgZnJvbVBhcmFtcyk7XG4gICAgY29uc29sZS5sb2coIUF1dGhTZXJ2aWNlLmlzQXV0aG9yaXplZCgpKTtcbiAgICBjb25zb2xlLmxvZyghQXV0aFNlcnZpY2UuaXNBdXRob3JpemVkKCkgJiYgdG9TdGF0ZS5uYW1lICE9PSAnbG9naW4nKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGlmICghQXV0aFNlcnZpY2UuaXNBdXRob3JpemVkKCkgJiYgdG9TdGF0ZS5uYW1lICE9PSAnbG9naW4nKSB7XG5cbiAgICAgIHNhdmVTdGF0ZVNlcnZpY2Uuc2F2ZShmcm9tUGFyYW1zLm1haWxCb3gsIGZyb21QYXJhbXMubWVzc2FnZUlkKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGxvZ2luXCIpO1xuICAgICAgJHN0YXRlLmdvKCdsb2dpbicpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuYXBwLmNvbnRyb2xsZXIoJ01haW4nLCBbJ0F1dGhTZXJ2aWNlJywgZnVuY3Rpb24gKEF1dGhTZXJ2aWNlKSB7XG4gIHRoaXMubG9nT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBBdXRoU2VydmljZS5sb2dPdXQoKTtcbiAgfTtcbn1dKTtcblxuYXBwLnJ1bihmdW5jdGlvbiAoJGh0dHBCYWNrZW5kKSB7XG4gICRodHRwQmFja2VuZC53aGVuR0VUKC9cXC5odG1sJC8pLnBhc3NUaHJvdWdoKCk7XG4gICRodHRwQmFja2VuZC53aGVuR0VUKCcvbWFpbCcpLnJlc3BvbmQod2luZG93Lm1vY2tzLm1lc3NhZ2VzKTtcbiAgJGh0dHBCYWNrZW5kLndoZW5HRVQoJy9jb250YWN0cycpXG4gIC8vICAgLy8gLnJlc3BvbmQoNDA0LCcnKTtcbiAgLnJlc3BvbmQod2luZG93Lm1vY2tzLmNvbnRhY3RzKTtcbiAgLy8gJGh0dHBCYWNrZW5kLndoZW5HRVQoJy9jb250YWN0cy86aWQnKVxuICAvLyAgIC5yZXNwb25kKGZ1bmN0aW9uIChtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycywgcGFyYW1zKSB7XG4gIC8vICAgICByZXR1cm4gWzIwMCwgd2luZG93Lm1vY2tzLmNvbnRhY3RzW051bWJlcihwYXJhbXMuaWQpXV07XG4gIC8vICAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXBwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvZ2luID0gcmVxdWlyZSgnLi92aWV3cy9sb2dpbi5odG1sJyk7XG5cbnZhciBfbG9naW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9naW4pO1xuXG52YXIgX2xvZ2luQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbG9naW5Db250cm9sbGVyLmpzJyk7XG5cbnZhciBfbG9naW5Db250cm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2luQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBsb2dpbiA9IGFuZ3VsYXIubW9kdWxlKCdsb2dpbicsIFtdKTtcblxubG9naW4uZGlyZWN0aXZlKCdsb2dpbicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogXCJFXCIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogX2xvZ2luMi5kZWZhdWx0LFxuICAgIGNvbnRyb2xsZXJBczogXCJsb2dpblwiLFxuICAgIGNvbnRyb2xsZXI6IFsnJHN0YXRlJywgJ0F1dGhTZXJ2aWNlJywgX2xvZ2luQ29udHJvbGxlcjIuZGVmYXVsdF1cbiAgfTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsb2dpbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbG9naW4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIiA8ZGl2IGNsYXNzPVxcXCJ0b3AtY29udGVudFxcXCI+IDxkaXYgY2xhc3M9XFxcImlubmVyLWJnXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yIHRleHRcXFwiPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtMyBmb3JtLWJveFxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tdG9wXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS10b3AtbGVmdFxcXCI+IDxoMz5Mb2dpbiB0byBNYWlsIGFwcDwvaDM+IDxwPkVudGVyIHVzZXJuYW1lIDogPHN0cm9uZz5hZG1pbjwvc3Ryb25nPjxicj4gYW5kIHBhc3N3b3JkIDogPHN0cm9uZz4xMjM8L3N0cm9uZz48L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLXRvcC1yaWdodFxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1rZXlcXFwiPjwvaT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJvdHRvbVxcXCI+IDxmb3JtIHJvbGU9XFxcImZvcm1cXFwiIGNsYXNzPVxcXCJsb2dpbi1mb3JtXFxcIiBuZy1zdWJtaXQ9XFxcImxvZ2luLmRvTG9naW4oKVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcInNyLW9ubHlcXFwiIGZvcj1cXFwiZm9ybS11c2VybmFtZVxcXCI+VXNlcm5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZm9ybS11c2VybmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lLi4uXFxcIiBjbGFzcz1cXFwiZm9ybS11c2VybmFtZSBmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmb3JtLXVzZXJuYW1lXFxcIiBuZy1tb2RlbD1cXFwibG9naW4ubG9naW5cXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwic3Itb25seVxcXCIgZm9yPVxcXCJmb3JtLXBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiZm9ybS1wYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkLi4uXFxcIiBjbGFzcz1cXFwiZm9ybS1wYXNzd29yZCBmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmb3JtLXBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwibG9naW4ucGFzc3dvcmRcXFwiPiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG5cXFwiPlNpZ24gaW4hPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zIHNvY2lhbC1sb2dpblxcXCI+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibG9naW4vdmlld3MvbG9naW4uaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9sb2dpbi92aWV3cy9sb2dpbi5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGxvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uIGxvZ2luQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKEF1dGhTZXJ2aWNlLmlzQXV0aG9yaXplZCgpKSB7XG4gICAgJHN0YXRlLmdvKCdhcHAubWFpbCcsIHsgbWFpbEJveDogJ2luYm94JyB9KTtcbiAgfVxuXG4gIHRoaXMuZG9Mb2dpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChBdXRoU2VydmljZS5hdXRob3JpemUoX3RoaXMubG9naW4sIF90aGlzLnBhc3N3b3JkKSkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAubWFpbCcsIHsgbWFpbEJveDogJ2luYm94JyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIENvcnJlY3QgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIldyb25nIHBhc3N3b3JkXCIpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxvZ2luQ29udHJvbGxlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbG9naW4vbG9naW5Db250cm9sbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbWVzc2FnZXNTZXJ2aWNlID0gcmVxdWlyZSgnLi4vc2VydmljZXMvbWVzc2FnZXNTZXJ2aWNlLmpzJyk7XG5cbnZhciBfbWVzc2FnZXNTZXJ2aWNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lc3NhZ2VzU2VydmljZSk7XG5cbnZhciBfbWFpbCA9IHJlcXVpcmUoJy4vdmlld3MvbWFpbC5odG1sJyk7XG5cbnZhciBfbWFpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWlsKTtcblxudmFyIF9tZXNzYWdlID0gcmVxdWlyZSgnLi92aWV3cy9tZXNzYWdlLmh0bWwnKTtcblxudmFyIF9tZXNzYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lc3NhZ2UpO1xuXG52YXIgX21lc3NhZ2VMaXN0ID0gcmVxdWlyZSgnLi9tZXNzYWdlTGlzdC5qcycpO1xuXG52YXIgX21lc3NhZ2VMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lc3NhZ2VMaXN0KTtcblxudmFyIF9hc2lkZSA9IHJlcXVpcmUoJy4vYXNpZGUuanMnKTtcblxudmFyIF9hc2lkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc2lkZSk7XG5cbnZhciBfYXNpZGVTZXJ2aWNlID0gcmVxdWlyZSgnLi9hc2lkZVNlcnZpY2UuanMnKTtcblxudmFyIF9hc2lkZVNlcnZpY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNpZGVTZXJ2aWNlKTtcblxudmFyIF9tYWlsQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWFpbENvbnRyb2xsZXIuanMnKTtcblxudmFyIF9tYWlsQ29udHJvbGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWlsQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtYWlsID0gYW5ndWxhci5tb2R1bGUoJ21haWwnLCBbXSk7XG5cbm1haWwuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwLm1haWwnLCB7XG4gICAgdXJsOiAnL21haWwvOm1haWxCb3gnLFxuICAgIHRlbXBsYXRlOiAnPG1haWw+PC9tYWlsPicsXG4gICAgcmVzb2x2ZToge1xuICAgICAgbWVzc2FnZXNYOiBmdW5jdGlvbiBtZXNzYWdlc1gobWVzc2FnZXNTZXJ2aWNlKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlc1NlcnZpY2UuZ2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KS5zdGF0ZSgnYXBwLm1haWwucmVhZCcsIHtcbiAgICB1cmw6ICcvOm1lc3NhZ2VJZCcsXG4gICAgdGVtcGxhdGU6ICc8bWVzc2FnZT48L21lc3NhZ2U+J1xuICB9KTtcbn1dKTtcblxuLy9UT0RPINC60L7RgNGA0LXQutGC0L3QviDQu9C4INGC0YPRgiDQv9GA0LjRgdCy0LDQuNCy0LDRgtGMIG1haWwuc2VydmljZSDQuNC70Lgg0L3QsNC00L4gYXBwLnNlcnZpY2Vcbm1haWwuc2VydmljZSgnbWVzc2FnZXNTZXJ2aWNlJywgWydSZXN0YW5ndWxhcicsIF9tZXNzYWdlc1NlcnZpY2UyLmRlZmF1bHRdKTtcbm1haWwuc2VydmljZSgnYXNpZGVTZXJ2aWNlJywgX2FzaWRlU2VydmljZTIuZGVmYXVsdCk7XG5cbm1haWwuZGlyZWN0aXZlKCdtYWlsJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHt9LFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgdGVtcGxhdGU6IF9tYWlsMi5kZWZhdWx0LFxuICAgIGNvbnRyb2xsZXI6IFsnJGh0dHAnLCAnJHN0YXRlJywgJyRmaWx0ZXInLCAnJHN0YXRlUGFyYW1zJywgJ3NhdmVTdGF0ZVNlcnZpY2UnLCAnbWVzc2FnZXNTZXJ2aWNlJywgX21haWxDb250cm9sbGVyMi5kZWZhdWx0XSxcbiAgICBjb250cm9sbGVyQXM6IFwibWFpbFwiXG4gIH07XG59KTtcblxubWFpbC5kaXJlY3RpdmUoJ21lc3NhZ2VzTGlzdCcsIF9tZXNzYWdlTGlzdDIuZGVmYXVsdCk7XG5cbm1haWwuZGlyZWN0aXZlKCdtZXNzYWdlJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHt9LFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlcjogWyckc3RhdGVQYXJhbXMnLCAnbWVzc2FnZXNTZXJ2aWNlJywgZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgbWVzc2FnZXNTZXJ2aWNlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlc1NlcnZpY2UuZ2V0T25lKCRzdGF0ZVBhcmFtcy5tZXNzYWdlSWQpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcbiAgICB9XSxcbiAgICB0ZW1wbGF0ZTogX21lc3NhZ2UyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlckFzOiBcIm1lc3NhZ2VcIlxuICB9O1xufSk7XG5cbm1haWwuZGlyZWN0aXZlKCdhc2lkZScsIFsnYXNpZGVTZXJ2aWNlJywgJ21lc3NhZ2VzU2VydmljZScsIF9hc2lkZTIuZGVmYXVsdF0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYWlsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlsL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgbWVzc2FnZXNTZXJ2aWNlID0gZnVuY3Rpb24gbWVzc2FnZXNTZXJ2aWNlKFJlc3Rhbmd1bGFyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGlzRGF0YVJlY2VpdmVkID0gZmFsc2U7XG5cbiAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoaXNEYXRhUmVjZWl2ZWQpIHJldHVybiBfdGhpcy5tZXNzYWdlcztcblxuICAgIHJldHVybiBSZXN0YW5ndWxhci5hbGwoJ21haWwnKS5nZXRMaXN0KCkudGhlbihmdW5jdGlvbiAobWVzc2FnZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TW9ja1wiKTtcbiAgICAgIGlzRGF0YVJlY2VpdmVkID0gdHJ1ZTtcbiAgICAgIF90aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH07XG5cbiAgdGhpcy5nZXRPbmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1tpZF07XG4gIH07XG5cbiAgLy9jb3VudCBmb2xkZXJzIEFTSURFIGZvciBiYWdlc1xuICB0aGlzLmNvdW50Rm9sZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMubWVzc2FnZXMpIHtcbiAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgIF90aGlzLm1lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICBpZiAob2JqW3ZhbHVlLmZvbGRlcl0pIG9ialt2YWx1ZS5mb2xkZXJdKys7ZWxzZSBvYmpbdmFsdWUuZm9sZGVyXSA9IDE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaXNEYXRhUmVjZWl2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzRGF0YVJlY2VpdmVkO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVzc2FnZXNTZXJ2aWNlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zZXJ2aWNlcy9tZXNzYWdlc1NlcnZpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIiA8ZGl2IGNsYXNzPVxcXCJtYWlsLWxheW91dC1Bc2lkZSBtYWluLWNvbHVtbnMgY29sLW1kLTIgbGlzdC1ncm91cFxcXCI+ICA8YXNpZGUgZm9sZGVycz1cXFwibWFpbC5hc2lkZVxcXCIgY2FsbD1cXFwibWFpbC5maWx0ZXJCeUFzaWRlRm9sZGVyKHRpdGxlKVxcXCIgY291bnRmb2xkZXJzPVxcXCJtYWlsLmNvdW50Rm9sZGVyc1xcXCI+PC9hc2lkZT4gPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcIm1haW4tY29sdW1ucyBjb2wtbWQtNSBsaXN0LWdyb3VwXFxcIj4gPG1lc3NhZ2VzLWxpc3Q+PC9tZXNzYWdlcy1saXN0PiA8L2Rpdj4gICA8ZGl2IGNsYXNzPVxcXCJtYWluLWNvbHVtbnMgY29sLW1kLTUgbGlzdC1ncm91cFxcXCI+IDx1aS12aWV3PjwvdWktdmlldz4gIDwvZGl2PiBcIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibWFpbC92aWV3cy9tYWlsLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC92aWV3cy9tYWlsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxsaSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj4ge3ttZXNzYWdlLm1lc3NhZ2UubmFtZX19PC9saT4gPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnQgYWxlcnQtaW5mb1xcXCI+IDxwPiB7e21lc3NhZ2UubWVzc2FnZS5lbWFpbH19IDwvcD4gPC9saT4gPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gd2VsbFxcXCI+IDxwPiB7e21lc3NhZ2UubWVzc2FnZS5ib2R5fX0gPC9wPiA8L2xpPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJtYWlsL3ZpZXdzL21lc3NhZ2UuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlsL3ZpZXdzL21lc3NhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9tZXNzYWdlc0xpc3QgPSByZXF1aXJlKCcuL3ZpZXdzL21lc3NhZ2VzLWxpc3QuaHRtbCcpO1xuXG52YXIgX21lc3NhZ2VzTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXNzYWdlc0xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWVzc2FnZXNMaXN0ID0gZnVuY3Rpb24gbWVzc2FnZXNMaXN0KCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IF9tZXNzYWdlc0xpc3QyLmRlZmF1bHRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1lc3NhZ2VzTGlzdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC9tZXNzYWdlTGlzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGEgY2xhc3M9XFxcIm1haWwtbGF5b3l0LW1lc3NhZ2VzLWxpc3QtYm94IGxpc3QtZ3JvdXAtaXRlbVxcXCIgdWktc3JlZj1cXFwiYXBwLm1haWwucmVhZCh7IG1lc3NhZ2VJZCA6ICd7e3ZhbHVlLmlkfX0nfSlcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIG5nLXJlcGVhdD1cXFwiKGtleSwgdmFsdWUpIGluIG1haWwubWVzc2FnZXMgfCBmaWx0ZXI6bWFpbC5tZXNzYWdlc0xpc3RGaWx0ZXJcXFwiIG5nLWNsaWNrPVxcXCJtYWlsLm1lc3NhZ2UgPSB2YWx1ZVxcXCI+e3t2YWx1ZS50aXRsZX19IDxoNCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiPnt7dmFsdWUuZW1haWx9fTwvaDQ+IDxwIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFxcXCI+e3t2YWx1ZS5uYW1lfX08L3A+IDwvYT5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibWFpbC92aWV3cy9tZXNzYWdlcy1saXN0Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC92aWV3cy9tZXNzYWdlcy1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXNpZGUgPSByZXF1aXJlKCcuL3ZpZXdzL2FzaWRlLmh0bWwnKTtcblxudmFyIF9hc2lkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc2lkZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhc2lkZSA9IGZ1bmN0aW9uIGFzaWRlKGFzaWRlU2VydmljZSwgbWVzc2FnZXNTZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgXCJmb2xkZXJzXCI6ICc9J1xuICAgIH0sXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyOiBbJ2FzaWRlU2VydmljZScsICckc3RhdGVQYXJhbXMnLCAnJGZpbHRlcicsIGZ1bmN0aW9uIChhc2lkZVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgJGZpbHRlcikge1xuXG4gICAgICB0aGlzLmNvdW50Rm9sZGVycyA9IG1lc3NhZ2VzU2VydmljZS5jb3VudEZvbGRlcnMoKTtcbiAgICAgIC8vYXNpZGUgZ2V0IElOQk9YLCBTRU5ULCBTUEFNLCBUUkFTSFxuICAgICAgdGhpcy5mb2xkZXJzID0gYXNpZGVTZXJ2aWNlLmdldCgpO1xuICAgIH1dLFxuICAgIHRlbXBsYXRlOiBfYXNpZGUyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlckFzOiBcImFzaWRlXCJcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFzaWRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlsL2FzaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGEgdWktc3JlZj1cXFwiYXBwLm1haWwoe21haWxCb3ggOiB2YWx1ZS50aXRsZS50b0xvd2VyQ2FzZSgpfSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIG5nLXJlcGVhdD1cXFwiKGluZGV4LCB2YWx1ZSkgaW4gYXNpZGUuZm9sZGVyc1xcXCI+IHt7dmFsdWUudGl0bGV9fVxcbjxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3thc2lkZS5jb3VudEZvbGRlcnNbdmFsdWUudGl0bGUudG9Mb3dlckNhc2UoKV19fTwvc3Bhbj4gPC9hPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJtYWlsL3ZpZXdzL2FzaWRlLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC92aWV3cy9hc2lkZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGFzaWRlU2VydmljZSA9IGZ1bmN0aW9uIGFzaWRlU2VydmljZSgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLmFzaWRlID0gW3tcbiAgICBcInRpdGxlXCI6IFwiSW5ib3hcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcIlNlbnRcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcIkRyYWZ0XCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCJUcmFzaFwiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwiU3BhbVwiXG4gIH1dO1xuXG4gIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpcy5hc2lkZTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFzaWRlU2VydmljZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC9hc2lkZVNlcnZpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgbWFpbENvbnRyb2xsZXIgPSBmdW5jdGlvbiBtYWlsQ29udHJvbGxlcigkaHR0cCwgJHN0YXRlLCAkZmlsdGVyLCAkc3RhdGVQYXJhbXMsIHNhdmVTdGF0ZVNlcnZpY2UsIG1lc3NhZ2VzU2VydmljZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBtZXNzYWdlSWQgPSBwYXJzZUludCgkc3RhdGVQYXJhbXMubWVzc2FnZUlkKTtcbiAgdmFyIG1haWxCb3ggPSAkc3RhdGVQYXJhbXMubWFpbEJveDtcblxuICBjb25zb2xlLmxvZyhtZXNzYWdlSWQsIG1haWxCb3gpO1xuICBjb25zb2xlLmxvZyhzYXZlU3RhdGVTZXJ2aWNlLmdldCgpLCBcIm1haWxcIik7XG5cbiAgaWYgKCFtZXNzYWdlSWQpIHtcbiAgICBtZXNzYWdlSWQgPSBzYXZlU3RhdGVTZXJ2aWNlLmdldCgpLm1lc3NhZ2VJZDtcbiAgfVxuICBpZiAoIW1haWxCb3gpIHtcbiAgICBtYWlsQm94ID0gc2F2ZVN0YXRlU2VydmljZS5nZXQoKS5tYWlsQm94O1xuICB9XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZUlkLCBtYWlsQm94KTtcbiAgY29uc29sZS5sb2coc2F2ZVN0YXRlU2VydmljZS5nZXQoKSwgXCJtYWlsXCIpO1xuXG4gIGlmICghbWFpbEJveCB8fCAhbWVzc2FnZUlkKSB7XG4gICAgY29uc29sZS5sb2coXCJubyBtZXNzYWdlIG5vIG1haWxib3hcIik7XG4gICAgJHN0YXRlLmdvKFwiYXBwLm1haWwucmVhZFwiLCB7ICdtYWlsQm94JzogbWFpbEJveCwgJ21lc3NhZ2VJZCc6IG1lc3NhZ2VJZCB9KTtcbiAgfVxuXG4gIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlc1NlcnZpY2UuZ2V0QWxsKCk7XG5cbiAgLy9maWx0ZXIgbWVzc2FnZXMgYnkgc2VhcmNoVGV4dCBmaWVsZFxuICB0aGlzLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5tZXNzYWdlID0ge307XG4gICAgX3RoaXMubWVzc2FnZXNMaXN0RmlsdGVyID0gX3RoaXMuc2VhcmNoVGV4dDtcbiAgfTtcblxuICAvLyBUT0RPXG4gIC8vbW92ZSBtZXNzYWdlIHRvIHNlbGVjdGVkRm9sZGVyXG4gIHRoaXMubW92ZSA9IGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAvL9C/0YDQuNGB0LLQsNC40LLQsNC10Lwg0L3QvtCy0YvQuSDRhNC+0LvQtNC10YBcbiAgICBfdGhpcy5tZXNzYWdlLmZvbGRlciA9IGZvbGRlcjtcbiAgICAvL9C/0LXRgNC10YHRh9C40YLRi9Cy0LDQtdC8IGJhZ2VzXG4gICAgX3RoaXMuY291bnRGb2xkZXJzID0gbWVzc2FnZXNTZXJ2aWNlLmNvdW50Rm9sZGVycygpO1xuICAgIC8v0L7QsdC90YPQu9GP0LXQvCAgbWVzc2FnZSDQsNC60YLQuNCy0L3Ri9C5XG4gICAgX3RoaXMubWVzc2FnZSA9IHt9O1xuICB9O1xuXG4gIHRoaXMuZmlsdGVyQnlBc2lkZUZvbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5tZXNzYWdlID0ge307XG4gICAgX3RoaXMuc2VhcmNoRmllbGQgPSBcIlwiO1xuICAgIGlmIChtYWlsQm94KSB7XG4gICAgICBfdGhpcy5tZXNzYWdlc0xpc3RGaWx0ZXIgPSB7XG4gICAgICAgIFwiZm9sZGVyXCI6IG1haWxCb3gudG9Mb3dlckNhc2UoKVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuZmlsdGVyQnlBc2lkZUZvbGRlcigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2VzU2VydmljZS5nZXRPbmUobWVzc2FnZUlkKSwgXCJtZXNzYWdlc1NlcnZpY2UuZ2V0T25lKG1lc3NhZ2VJZClcIilcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZXNTZXJ2aWNlLmdldE9uZShtZXNzYWdlSWQpO1xuICBpZiAodGhpcy5tZXNzYWdlLmZvbGRlci50b0xvd2VyQ2FzZSgpICE9PSBtYWlsQm94KSB7XG4gICAgdGhpcy5tZXNzYWdlID0ge307XG4gIH1cbiAgc2F2ZVN0YXRlU2VydmljZS5zYXZlKG1haWxCb3gsIG1lc3NhZ2VJZCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYWlsQ29udHJvbGxlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC9tYWlsQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBdXRoU2VydmljZSA9IGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGxvY2FsU3RvcmFnZVNlcnZpY2UpIHtcbiAgdmFyIGlzTG9naW4gPSBmYWxzZTtcblxuICBpZiAobG9jYWxTdG9yYWdlU2VydmljZS5nZXQoXCJpc0F1dGhvcml6ZWRcIikpIHtcbiAgICBpc0xvZ2luID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuYXV0aG9yaXplID0gZnVuY3Rpb24gKGxvZ2luLCBwYXNzd29yZCkge1xuXG4gICAgaWYgKGxvZ2luID09ICdhZG1pbicgJiYgcGFzc3dvcmQgPT0gMTIzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcImlzQXV0aG9yaXplZFwiLCB0cnVlKTtcbiAgICAgIGlzTG9naW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0xvZ2luID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc0xvZ2luO1xuICB9O1xuXG4gIHRoaXMubG9nT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlzTG9naW4gPSBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcImlzQXV0aG9yaXplZFwiLCBmYWxzZSk7XG4gIH07XG5cbiAgdGhpcy5pc0F1dGhvcml6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzTG9naW47XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdXRoU2VydmljZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbG9naW4vQXV0aFNlcnZpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc2F2ZVN0YXRlU2VydmljZSA9IGZ1bmN0aW9uIHNhdmVTdGF0ZVNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkc3RhdGUpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAobWFpbEJveCwgbWVzc2FnZUlkKSB7XG4gICAgY29uc29sZS5sb2coXCJzYXZlIHNhdmVTdGF0ZVNlcnZpY2VcIik7XG4gICAgX3RoaXMubWFpbEJveCA9IG1haWxCb3g7XG4gICAgX3RoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuICB9O1xuXG4gIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0IHNhdmVTdGF0ZVNlcnZpY2VcIik7XG5cbiAgICBpZiAoIXRoaXMubWFpbEJveCB8fCAhdGhpcy5tZXNzYWdlSWQpIHtcbiAgICAgIHRoaXMubWFpbEJveCA9IFwiaW5ib3hcIjtcbiAgICAgIHRoaXMubWVzc2FnZUlkID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21haWxCb3gnOiB0aGlzLm1haWxCb3gsXG4gICAgICAnbWVzc2FnZUlkJzogcGFyc2VJbnQodGhpcy5tZXNzYWdlSWQpXG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNhdmVTdGF0ZVNlcnZpY2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NlcnZpY2VzL3NhdmVTdGF0ZVNlcnZpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPjwvYT4gPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+IDxsaT4gIDwvbGk+IDxsaT48YSB1aS1zcmVmPVxcXCJhcHAubWFpbCh7bWFpbEJveCA6ICdpbmJveCd9KVxcXCIgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCI+TWFpbDwvYT48L2xpPiA8bGk+PGEgdWktc3JlZj1cXFwiYXBwLmNvbnRhY3RzLmxpc3RcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiPkNvbnRhY3RzPC9hPjwvbGk+IDxsaT48L2xpPiA8bGk+IDwvbGk+IDxsaT4gIDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2YmFyLXJpZ2h0XFxcIj4gPGEgdWktc3JlZj1cXFwibG9naW5cXFwiIG5nLWNsaWNrPVxcXCJtYWluLmxvZ091dCgpXFxcIj5MT0cgT1VUPC9hPiAgIDwvbGk+IDwvdWw+IDwvZGl2PiA8L25hdj4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDx1aS12aWV3PiAgPC91aS12aWV3PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiZGFucGFuMS5naXRodWIuaW8vYXBwL2FwcC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=