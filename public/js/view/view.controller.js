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

// 5922f963909023e742b85d62
      $scope.getFile = function(fileGroupId) {
        viewService.getFile(fileGroupId).then(
          function successCallback(response) {
              // RHMAP compatibility
              $scope.file = 'data:image/jpeg;base64,' + response.data;

                  //console.log('response: ' + JSON.stringify(response));
                }
              );
      }

// 5922f96248a5c3795643f6a1
      viewService.getSubmission($scope.submission._id).then(
          function successCallback(response) {
              // RHMAP compatibility
              $scope.submission = response;
              console.log('response: ' + JSON.stringify(response));

              for(var i = 0; i < $scope.submission.formFields.length; i++) {

                  if($scope.submission.formFields[i].fieldId.type === "photo") {
                    $scope.getFile($scope.submission.formFields[i].fieldValues[0].groupId);
                    break;
                  }
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
