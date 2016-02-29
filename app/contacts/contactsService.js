let contactsService = function(Restangular, localStorageService) {

  var isDataReceived = false;

  this.getAll = function() {

    if (isDataReceived) return this.contacts;
    if (localStorageService.get("contacts")) return this.getLocalAll();

    return Restangular.all('contacts')
      .getList()
      .then((contacts) => {
        console.log("getMock")
        isDataReceived = true;
        this.contacts = contacts;
        return contacts;
      })

  }

  this.getLocalAll = function() {
    console.log("getLocalAll")
    this.contacts = localStorageService.get("contacts");
    return this.contacts;
  }


  this.getOne = function(index) {
    return this.contacts[index];
    // return Restangular.one('contacts', index)
    //   .get();
  }

  this.add = function(contact, index) {
    this.contacts.push(contact);
    this.save();
  }

  this.edit = function(contact, index) {
    this.contacts.splice(index, 1, contact);
    this.save();
  }

  this.delete = function(index) {
    this.contacts.splice(index, 1);
    this.save();
  }

  this.save = function() {
    console.log("Local Saved")
    localStorageService.set("contacts", this.contacts);
  }

  this.isDataReceived = () => isDataReceived;

  //delete localStorage
  // this.save();

};

export default contactsService;

