(function() {
'use strict';

  angular
  .module('view')
  .controller('viewListController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    $scope.submissionList = [];

    viewService.getSubmissionList().then(
        function successCallback(response) {
            // RHMAP compatibility
            $scope.submissionList = response.submissions.submissions;

                console.log('response: ' + JSON.stringify(response));
              }

    );

    $scope.select = function(submission) {

      $state.go('view', {sub: submission});
    };





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
