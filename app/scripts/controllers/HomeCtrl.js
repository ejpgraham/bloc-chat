(function(){
  function HomeCtrl($cookies, $uibModal, $scope, Room, Message) {
    $scope.rooms = Room.all;
    $scope.activeRoom = null;
    this.openModal = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/newchatroom.html',
        size: 'sm',
        controller: 'ModalCtrl'
      });
    };
    this.openChatRoom = function(chatRoom){
      $scope.activeRoom = chatRoom;
      $scope.activeRoom.messages = Message.getByRoomId(chatRoom.$id);
    };

    this.sendMessage = function(newMessage) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      var currentMessage = {
        roomId: $scope.activeRoom.$id,
        content: newMessage,
        username: currentUser,
        sentAt: new Date(),
      };
      Message.send(currentMessage);
      $scope.newMessage = null;
    };

  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$cookies','$uibModal','$scope','Room', 'Message', HomeCtrl]);
})();
