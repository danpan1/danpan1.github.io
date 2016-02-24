app.service("contactsService", function ($http, $q, localStorageService) {


  this.contacts = [{
    "id": 1,
    "avatar": "https://pp.vk.me/c616428/v616428036/8dd0/oERbNws4rnE.jpg",
    "name": "Danil Hin",
    "email": "danpan123@123yandex.ru",
    "tel": "31231232",
    "dateOfBirth": "03/12/1924",
    "notes": "Прибалтика Дома"
  }, {
    "id": 2,
    "avatar": "https://pp.vk.me/c607330/v607330530/470a/P3srj5eL4Gg.jpg",
    "name": "Kar Hin",
    "email": "kar@123yandex.ru",
    "tel": "22",
    "dateOfBirth": "03/12/1111",
    "notes": "gecnj"
  }]

  this.getAll = function () {
    return this.contacts;
  }

  this.get = function () {
    if (localStorageService.get("contacts")) this.contacts = localStorageService.get("contacts");
    return this.contacts;
  }


  this.getOne = function (index) {
    return this.contacts[index];
  }

  this.add = function (contact, index) {
    this.contacts.push(contact);
    this.save();
  }

  this.edit = function (contact, index) {
    this.contacts.splice(index, 1, contact);
    this.save();
  }

  this.delete = function (index) {
    this.contacts.splice(index, 1);
    this.save();
  }

  this.save = function () {
    console.log("Asave")
    localStorageService.set("contacts", this.contacts);
  }


  // this.save();
  this.get();


})

