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
