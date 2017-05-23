(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    if($state.params.sub != null) {
      $scope.submission = $state.params.sub;
      $sessionStorage.submission = $state.params.sub;
    } else {
      $scope.submission = $sessionStorage.submission;
    }

  $scope.file = "";


      viewService.getFile('5922f963909023e742b85d62').then(
          function successCallback(response) {
              // RHMAP compatibility
              $scope.file = 'data:image/jpeg;base64,' + response.data;

                  //console.log('response: ' + JSON.stringify(response));
                }

      );


      viewService.getSubmission('5922f96248a5c3795643f6a1').then(
          function successCallback(response) {
              // RHMAP compatibility
              $scope.submission = response;

                  //console.log('response: ' + JSON.stringify(response));
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
