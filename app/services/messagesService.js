app.service("messagesService", function(Restangular) {

  var isDataReceived = false;

  this.get = () => {


    if (isDataReceived) return this.messages;

    return Restangular.all('mail')
      .getList()
      .then((messages) => {
        console.log("getMock")
        isDataReceived = true;
        this.messages = messages;
        return messages;
      })

  };

  this.getAll = function() {
    return this.messages;
  };

  this.getOne = function(id) {
    return this.messages[id];
  };

  //count folders ASIDE for bages
  this.countFolders = () => {
    if (this.messages) {
      var obj = {};
      this.messages.forEach(function(value, index) {
        if (obj[value.folder]) obj[value.folder]++;
        else obj[value.folder] = 1;
      })
      return obj;
    }
  }

  this.isDataReceived = () => isDataReceived;

})
