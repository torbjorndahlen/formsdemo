(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    $scope.submissions = {};
    $scope.forms = {};



    var params1 = {};
    $fh.forms.init(params1, function(err) {
      if (err) {
        console.log('Error Init: ' + err);
      } else {
        //console.log("forms init OK");
      }

    });

    var params2 = {
     "fromRemote": true
   };

   /*

    $fh.forms.getForms(params2, function(err, forms){
      if (err) {
        console.log('Error getForms: ' +err);
      } else {
        //console.log("get forms OK");
        $scope.forms = forms.getFormsList();
        console.log('Forms list: ' + formsList);
      }


    });
*/
    var params3 = {};
    $fh.forms.getSubmissions(params3, function (err, submissions) {
      if (err) {
        console.log('Error getSubmissions: ' +err);
      } else {
        //console.log("get submissions OK");
        //console.log('Array of completed submissions', JSON.stringify(submissions));
        $scope.submissions = JSON.stringify(submissions);
        //$scope.$apply();
      }


    });


/*
    viewService.ping().then(
        function successCallback(response) {
            // RHMAP compatibility
              if(response.status != null && response.status != 'SUCCESS') {
                // Handle FHCloud not calling errorCallback
                console.log('fail: ' + JSON.stringify(response));
              } else {
                console.log('response: ' + JSON.stringify(response));
              }
          }
    );
    */

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
