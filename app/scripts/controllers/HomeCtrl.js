(function(){
  function HomeCtrl($uibModal, $scope, Room) {
    $scope.rooms = Room;
    this.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl'
      });
    };
  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal','$scope','Room', HomeCtrl]);
})();
