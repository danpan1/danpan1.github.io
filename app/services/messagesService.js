app.service("messagesService", function(Restangular, $q) {
  var isDataReceived = false;
  this.get = () => {
    if (isDataReceived) return;
    var deferred = $q.defer();
    if (!isDataReceived) {
      $http.get("dataAll.json")
        .success((data) => {
          this.messages = data;
          isDataReceived = true;
          // timeout для preloader animation (for fun)
          // setTimeout(() => {
            deferred.resolve(this.messages);
          // }, 1200)

        })
        .error(function(data) {
          console.log("messagesService fail request");
          deferred.reject(data);
        });
    } else {
      deferred.resolve(this.messages);
    }
    return deferred.promise;
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
