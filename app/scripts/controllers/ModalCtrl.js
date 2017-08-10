(function(){
  function ModalCtrl(Room, $scope, $uibModalInstance){
    $scope.cancel = function(){
      $uibModalInstance.dismiss();
    };
    $scope.newRoom = function(){
       $uibModalInstance.close();
       Room.add({
         $value: $scope.room.name
       });
    };

  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room','$scope', '$uibModalInstance', ModalCtrl]);
})();
