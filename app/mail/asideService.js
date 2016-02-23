app.service("asideService", function () {

  this.aside = [{
    "title": "Inbox"
  }, {
    "title": "Sent"
  }, {
    "title": "Draft"
  }, {
    "title": "Trash"
  }, {
    "title": "Spam"
  }]

  this.get = () => {
    return this.aside;
  };
})
