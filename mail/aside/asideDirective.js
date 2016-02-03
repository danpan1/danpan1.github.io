app.directive('aside', function (asideService, messagesService) {
  return {
    restrict: 'E',
    scope: {
      "folders": '=',
      "call": '&'
    },
    bindToController: true,
    controller: function (asideService, $stateParams, $filter) {

      // console.log($stateParams.asideTitle)
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
        console.log("click", aside)
          // console.log("click", this.call("ASD"))
        this.active = aside;
        console.log("this.active", this.active)
        this.call(aside);

      }


      //aside get INBOX, SENT, SPAM, TRASH
      this.folders = asideService.get();
      this.active = this.folders[0];
      var t = $filter('getByTitle')(this.folders, $stateParams.asideTitle);
      console.log("filter REs", t)
      this.click(t);

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
