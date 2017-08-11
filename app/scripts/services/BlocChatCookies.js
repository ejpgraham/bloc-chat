(function(){
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ''){
      $uibModal.open({
        templateUrl: '/templates/login.html',
        size: 'sm',
        controller: 'ModalCtrl',
        backdrop: 'static',
        keyboard: false,
      });
    }

  }

  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
