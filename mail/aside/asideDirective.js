app.directive('aside', function (asideService, messagesService) {
  return {
    restrict: 'E',
    scope: {
      "folders": '=',
      "call": '&'
    },
    bindToController: true,
    controller: function (asideService) {

      // как мне здесь получить countFolders из messagesService если там
      // еще нет сообщений. приходится делать еще один запрос
      messagesService.get().then((data) => {
        this.countFolders = messagesService.countFolders();
      }, function (reason) {
        console.log("messagesService fail request");
      }, function (update) {
        console.log('Got notification: ' + update);
      });

      this.click = (aside) => {
        this.active = aside;
        this.call(aside);
      }

      //aside get INBOX, SENT, SPAM, TRASH
      this.folders = asideService.get();
      this.active = this.folders[0];
    },
    templateUrl: 'mail/aside/aside.html',
    controllerAs: "aside"
  };
});
