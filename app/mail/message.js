app.directive('messagesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/mail/views/messages-list.html'
  };
});

app.directive('message', function() {
  return {
    restrict: 'E',
    scope: {
    },
    bindToController: true,
    controller: function($stateParams, messagesService) {
      this.message = messagesService.getOne($stateParams.messageId)
      console.log(this.message)
    },
    templateUrl: 'app/mail/views/message.html',
    controllerAs: "message"
  };
});
