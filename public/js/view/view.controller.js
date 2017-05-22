(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    $scope.submissions = {};
    $scope.file = "";



    viewService.getFile('5922f963909023e742b85d62').then(
        function successCallback(response) {
            // RHMAP compatibility
            $scope.file = response.data;

                console.log('response: ' + JSON.stringify(response));
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
