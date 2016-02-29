const saveStateService = function($stateParams, $state) {

  this.save = (mailBox, messageId) => {
    console.log("save saveStateService");
    this.mailBox = mailBox;
    this.messageId = messageId;

  }

  this.get = function() {
    console.log("get saveStateService");

    if (!this.mailBox || !this.messageId) {
      this.mailBox = "inbox";
      this.messageId = 1;
    }

    return {
      'mailBox': this.mailBox,
      'messageId': parseInt(this.messageId)
    }

  };

};

export default saveStateService;

