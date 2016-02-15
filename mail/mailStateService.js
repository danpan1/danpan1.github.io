app.service("mailStateService", function($stateParams, $state) {

  this.save = () => {
    console.log("saved",$stateParams.mailBox)
    this.mailBox = $stateParams.mailBox;
    this.messageId = $stateParams.messageId;
  };

  this.get = function() {
    if (!this.mailBox || !this.messageId) {
      this.mailBox = "inbox";
      this.messageId = 1;
    }
    return {
      'mailBox': this.mailBox,
      'messageId': parseInt(this.messageId)
    };
  };
})
