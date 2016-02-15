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

app.filter('getByTitle', function () {
  return function (input, title) {
    var i = 0,
      len = input.length;
    for (; i < len; i++) {
      console.log("input", input);
      console.log("input", input.title);
      console.log("title", title);
      if (input[i].title.toLowerCase() == title) {
        return input[i];
      }
    }
    return null;
  }
});
