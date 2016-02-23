app.service("saveStateService", function ($stateParams, $state) {

  this.save = (mailBox, messageId) => {

    this.mailBox = mailBox;
    this.messageId = messageId;

  }

  this.get = function () {

    if (!this.mailBox || !this.messageId) {
      this.mailBox = "inbox";
      this.messageId = 1;
    }

    return {
      'mailBox': this.mailBox,
      'messageId': parseInt(this.messageId)
    }

  };

});
