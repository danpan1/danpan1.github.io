app.directive('mail', function() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'mail/mail.html',
    controller: function($http, $state, $filter, $stateParams, mailStateService, messagesService) {

      var messageId = parseInt($stateParams.messageId);
      var mailBox = $stateParams.mailBox;

      console.log(messageId, mailBox)
      console.log(mailStateService.get(), "mail");

      if (!mailBox || !messageId) {
        messageId = mailStateService.get().messageId;
        mailBox = mailStateService.get().mailBox;
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
      mailStateService.save()


    },
    controllerAs: "mail"
  };
});

app.directive('messagesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'mail/message/messages-list.html'
  };
});

app.directive('message', function() {
  return {
    restrict: 'E',
    scope: {
      message: "="
    },
    bindToController: true,
    controller: function() {
      // console.log($stateParams.messageId)
    },
    templateUrl: 'mail/message/message.html',
    controllerAs: "message"
  };
});
