import asideTemplate from './views/aside.html'

let aside = function(asideService, messagesService) {
  return {
    restrict: 'E',
    scope: {
      "folders": '='
    },
    bindToController: true,
    controller: ['asideService', '$stateParams', '$filter', function(asideService, $stateParams, $filter) {

      this.countFolders = messagesService.countFolders();
      //aside get INBOX, SENT, SPAM, TRASH
      this.folders = asideService.get();

    }],
    template: asideTemplate,
    controllerAs: "a side"
  };
};

export default aside;

