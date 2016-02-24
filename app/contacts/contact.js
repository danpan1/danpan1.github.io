"use strict";
app.directive('contact', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'contacts/views/contact.html',
    controller: function (contactsService, $stateParams, $state) {

      // if (!contactsService.isDataReceived) contactsService.getAll();
      
      var contactId = $stateParams.contactId;
      if (contactId !== "new") {
        this.current = contactsService.getOne(contactId)
      }

      // console.log(this.current);

      this.submitFormContact = () => {
        console.log(contactForm.$valid)
        console.log("submit")


        if (contactId === "new") {
          contactsService.add(this.current, contactId);
        } else {
          contactsService.edit(this.current, contactId);
        }

        $state.go("app.contacts.list")

      }

      this.delete = () => {

        if (contactId !== "new") {
          contactsService.delete(contactId);
        }

        $state.go("app.contacts.list")

      }

    },
    controllerAs: "contact"
  };
});

