app.directive('aside', function (asideService, messagesService) {
  return {
    restrict: 'E',
    scope: {
      "folders": '='
    },
    bindToController: true,
    controller: function (asideService, $stateParams, $filter) {

      // как мне здесь получить countFolders из messagesService если там
      // еще нет сообщений. приходится делать еще один запрос
      // messagesService.getAll().then((data) => {
      //   this.countFolders = messagesService.countFolders();
      // }, function (reason) {
      //   console.log("messagesService fail request");
      // }, function (update) {
      //   console.log('Got notification: ' + update);
      // });
      
      this.countFolders = messagesService.countFolders();
      //aside get INBOX, SENT, SPAM, TRASH
      this.folders = asideService.get();

    },
    templateUrl: 'mail/aside/aside.html',
    controllerAs: "aside"
  };
});
