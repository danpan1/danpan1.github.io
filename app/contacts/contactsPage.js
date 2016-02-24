app.directive('contactsPage', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'app/contacts/views/contactsPage.html',
    controller: function (contactsService) {

      //получает напрямую из сервиса без запроса. запрос был в resolve
      this.contacts = contactsService.getAll();
      
    },
    controllerAs: "contactsPage"
  };
});

