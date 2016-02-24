app.directive('aside', function (asideService, messagesService) {
  return {
    restrict: 'E',
    scope: {
      "folders": '='
    },
    bindToController: true,
    controller: function (asideService, $stateParams, $filter) {
      
      this.countFolders = messagesService.countFolders();
      //aside get INBOX, SENT, SPAM, TRASH
      this.folders = asideService.get();

    },
    templateUrl: 'app/mail/views/aside.html',
    controllerAs: "aside"
  };
});
