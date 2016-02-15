app.service("messagesService", function($http, $q) {

    this.get = () => {

        var deferred = $q.defer();

        $http.get("dataAll.json")
            .success((data) => {
                this.messages = data;
                deferred.resolve(this.messages);
            })
            .error(function(data) {
                console.log("messagesService fail request");
                deferred.reject(data);
            });

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
})
