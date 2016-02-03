app.directive('mail', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    templateUrl: 'mail/mail.html',
    controller: function ($http, messagesService, $filter, $stateParams) {

      // console.log("mailContrl");
      // console.log($stateParams.asideTitle)
      // if ($stateParams.asideTitle === no) {};
      messagesService.get().then((data) => {
        //все сообщения приходят в messages
        this.messages = data;
        //init activeAside = INBOX, messagesListFilter = "INBOX"
        // this.filterByAsideFolder(this.aside[0]);
        //BAGES aside
        this.countFolders = messagesService.countFolders();
        // console.log(this.countFolders);
      }, function (reason) {
        console.log("messagesService fail request");
      }, function (update) {
        alert('Got notification: ' + update);
      });

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

        console.log("filterByAsideFolder213")
      this.filterByAsideFolder = (asideTitle) => {
        console.log("filterByAsideFolder", asideTitle)
        this.message = {};
        this.searchField = "";
        if (asideTitle) {
          this.messagesListFilter = {
            "folder": asideTitle.toLowerCase()
          };
        };
      }



    },
    controllerAs: "mail"
  };
});

app.directive('messagesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'mail/message/messages-list.html'
  };
});

app.directive('message', function () {
  return {
    restrict: 'E',
    scope: {
      name: "=",
      email: "=",
      body: "="
    },
    bindToController: true,
    controller: function () {},
    templateUrl: 'mail/message/message.html',
    controllerAs: "message"
  };
});
