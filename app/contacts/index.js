'use strict';
// import angular from 'angular';

const contacts = angular.module('contacts', []);

contacts.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.contacts', {
      url: '/contacts',
      abstract: true,
      template: '<ui-view/>',
      resolve: {
        contacts: function(contactsService) {
          return contactsService.getAll();
        }
      }
    })
    .state('app.contacts.list', {
      url: '/list',
      template: '<contacts-page></contacts-page>'

    })
    .state('app.contacts.edit', {
      url: '/:contactId/edit',
      template: '<contact></contact>'
    })

}]);

import contactsService from './contactsService.js';
import contactsPageDirective from './contactsPageDirective.js';
import contactDirective from './contactDirective.js';

//TODO корректно ли тут присваивать contacts.service или надо app.service
contacts.directive('contactsPage', contactsPageDirective);
contacts.directive('contact', contactDirective);
contacts.service('contactsService', ['Restangular', 'localStorageService', contactsService])



export default contacts;

