"use strict";
app.directive('contact', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'contacts/contactEdit/contact.html',
    controller: function(contactsService, $stateParams, $state) {
      var self = this;
      var isNewContact = $stateParams.contactId === "new";
      if (!isNewContact) this.current = contactsService.get()[parseInt($stateParams.contactId) - 1];
      // console.log(contactsService.get())

      this.add = () => {

        if (isNewContact) {
          contactsService.add(this.current);
        } else {
          contactsService.edit(this.current);
        }

        $state.go("contacts.list")
      }
    },
    controllerAs: "contact"
  };
});
