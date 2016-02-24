app.directive('mail', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'app/mail/views/mail.html',
    controller: function($http, $state, $filter, $stateParams, saveStateService, messagesService) {

      var messageId = parseInt($stateParams.messageId);
      var mailBox = $stateParams.mailBox;

      console.log(messageId, mailBox)
      console.log(saveStateService.get(), "mail");

      if (!messageId) {
        messageId = saveStateService.get().messageId;
      }
      if (!mailBox) {
        mailBox = saveStateService.get().mailBox;
      }

      console.log(messageId, mailBox)
      console.log(saveStateService.get(), "mail");

      if (!mailBox || !messageId) {
        console.log("no message no mailbox")
        $state.go(`app.mail.read`, { 'mailBox': mailBox, 'messageId': messageId })
      }

      this.messages = messagesService.getAll();

      //filter messages by searchText field
      this.search = () => {
        this.message = {};
        this.messagesListFilter = this.searchText;
      };

      // TODO
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
