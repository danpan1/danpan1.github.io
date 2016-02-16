app.directive('mail', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'mail/mail.html',
    controller: function($http, $state, $filter, $stateParams, saveStateService, messagesService) {

      var messageId = parseInt($stateParams.messageId);
      var mailBox = $stateParams.mailBox;

      console.log(messageId, mailBox)
      console.log(saveStateService.get(), "mail");

      if (!mailBox || !messageId) {
        messageId = saveStateService.get().messageId;
        mailBox = saveStateService.get().mailBox;
        $state.go(`mail`, { 'mailBox': mailBox, 'messageId': messageId })
      }

      this.messages = messagesService.getAll();

      //filter messages by searchText field
      this.search = () => {
        this.message = {};
        this.messagesListFilter = this.searchText;
      };

      //move message to selectedFolder
      this.move = (folder) => {
        //присваиваем новый фолдер
        this.message.folder = folder;
        //пересчитываем bages
        this.countFolders = messagesService.countFolders();
        //обнуляем  message активный
        this.message = {};
      }

      this.filterByAsideFolder = () => {
        this.message = {};
        this.searchField = "";
        if (mailBox) {
          this.messagesListFilter = {
            "folder": mailBox.toLowerCase()
          };
        };
      }

      this.filterByAsideFolder();

      // console.log(messagesService.getOne(messageId), "messagesService.getOne(messageId)")
      this.message = messagesService.getOne(messageId);
      if (this.message.folder.toLowerCase() !== mailBox) {
        this.message = {}
      }
      saveStateService.save(mailBox, messageId)


    },
    controllerAs: "mail"
  };
});
