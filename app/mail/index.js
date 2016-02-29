'use strict';
// import angular from 'angular';

const mail = angular.module('mail', []);

mail.config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('app.mail', {
      url: '/mail/:mailBox',
      template: '<mail></mail>',
      resolve: {
        messagesX: function(messagesService) {
          return messagesService.get()
        }
      }
    })
    .state('app.mail.read', {
      url: '/:messageId',
      template: '<message></message>'
    })

}]);

import messagesService from '../services/messagesService.js';
import mailTemplate from './views/mail.html';

import messageTemplate from './views/message.html';
import messageListDirective from './messageList.js';
import asideDirective from './aside.js';
import asideService from './asideService.js';
import mailController from './mailController.js';

//TODO корректно ли тут присваивать mail.service или надо app.service
mail.service('messagesService', ['Restangular', messagesService])
mail.service('asideService', asideService)


mail.directive('mail', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    template: mailTemplate,
    controller: ['$http', '$state', '$filter', '$stateParams', 'saveStateService', 'messagesService', mailController],
    controllerAs: "mail"
  };
});

mail.directive('messagesList', messageListDirective);

mail.directive('message', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    controller: ['$stateParams', 'messagesService', function($stateParams, messagesService) {
      this.message = messagesService.getOne($stateParams.messageId)
      console.log(this.message)
    }],
    template: messageTemplate,
    controllerAs: "message"
  }
});

mail.directive('aside', ['asideService', 'messagesService', asideDirective]);



export default mail;

