'use strict';

import contactsPageTemplate from './views/contactsPage.html';

let contactsPage = function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    template: contactsPageTemplate,
    controller: ['contactsService', function(contactsService) {

      //получает напрямую из сервиса без запроса. запрос был в resolve
      this.contacts = contactsService.getAll();

    }],
    controllerAs: "contactsPage"
  }
};

export default contactsPage;

