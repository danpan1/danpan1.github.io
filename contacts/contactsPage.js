app.directive('contactsPage', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'contacts/contactsPage.html',
    controller: function (contactsService, localStorageService) {

      this.contacts = contactsService.get();
      this.contact = {};

      this.show = (contact) => {
        this.contact = contact;
        this.contact.show = true;
      }

      this.refresh = () => {
        console.log("refreshed");
        this.contacts = contactsService.getAll();
      }
    },
    controllerAs: "contactsPage"
  };
});
