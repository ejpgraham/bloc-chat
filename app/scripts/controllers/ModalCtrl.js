(function(){
  function ModalCtrl(Room, $cookies, $scope, $uibModalInstance){
    $scope.cancel = function(){
      $uibModalInstance.dismiss();
    };
    $scope.newRoom = function(){
       $uibModalInstance.close();
       Room.add({
         $value: $scope.room.name
       });
    };
    $scope.enterUsername = function(){
      $uibModalInstance.close();
      $cookies.put('blocChatCurrentUser', $scope.user.username);
    };

  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$cookies','$scope', '$uibModalInstance', ModalCtrl]);
})();
