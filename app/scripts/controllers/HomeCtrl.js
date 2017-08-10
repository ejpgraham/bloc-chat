(function(){
  function HomeCtrl($uibModal, $scope, Room, Message) {
    $scope.rooms = Room.all;
    $scope.activeRoom = null;
    this.openModal = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl'
      });
    };
    this.openChatRoom = function(chatRoom){
      $scope.activeRoom = chatRoom;
      $scope.activeRoom.messages = Message.getByRoomId(chatRoom.$id);
    };

  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal','$scope','Room', 'Message', HomeCtrl]);
})();
