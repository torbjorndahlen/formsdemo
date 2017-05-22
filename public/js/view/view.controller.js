(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    $scope.submissions = {};
    $scope.file = "";



    viewService.getFile().then(
        function successCallback(response) {
            // RHMAP compatibility
              if(response.status != null && response.status != 'SUCCESS') {
                // Handle FHCloud not calling errorCallback
                console.log('fail: ' + JSON.stringify(response));
              } else {
                $scope.file = response;
                //console.log('response: ' + JSON.stringify(response));
              }
          }
    );
    

    $scope.toolbarButton = function(event, caller) {

      $mdDialog.show(
        $mdDialog.alert()
        .title('Event: ' + event)
        .textContent('Caller: ' + caller)
        .ariaLabel('Work in progress')
        .ok('Awesome!')
        .targetEvent(event)
      );

    }





  }]);
})();
