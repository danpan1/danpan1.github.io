app.directive('contactsPage', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'contacts/contactsPage.html',
    controller: function (contactsService, localStorageService) {
      this.contacts = contactsService.get();
    },
    controllerAs: "contactsPage"
  };
});
