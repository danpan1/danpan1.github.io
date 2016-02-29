import messageListTemplate from './views/messages-list.html';

let messagesList = function() {
  return {
    restrict: 'E',
    template: messageListTemplate
  };
}

export default messagesList;

