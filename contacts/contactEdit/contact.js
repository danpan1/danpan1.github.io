"use strict";
app.directive('contact', function () {
  return {
    restrict: 'E',
    scope: {
      avatar: "=",
      name: "=",
      email: "=",
      tel: "=",
      dateOfBirth: "=",
      notes: "=",
      show: "=",
      refresh: "&"
    },
    bindToController: true,
    templateUrl: 'contacts/contactEdit/contact.html',
    controller: function (contactsService) {
      var self = this;
      // какие данные тут использовать. как переносить их в контактлист
      this.add = () => {
        let contact = {
            "avatar": self.avatar,
            "name": self.name,
            "email": self.email,
            "tel": self.tel,
            "dateOfBirth": self.dateOfBirth,
            "notes": self.notes,
            "show": self.show
          }
          
          //Как добавлять контакт)))))
        contactsService.add(contact);
        this.show = false;
        this.refresh();
      }
    },
    controllerAs: "contact"
  };
});
