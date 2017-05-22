(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){

    $scope.submission = {};

    var params1 = {};
    $fh.forms.init(params1, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("forms init OK");
      }

    });

    var params2 = {
     "fromRemote": true
    };

    $fh.forms.getForms(params2, function(err, forms){
      if (err) {
        console.log(err);
      } else {
        console.log("get forms OK");
        var formsList = forms.getFormsList();
        console.log(formsList);
      }


    });

    var params3 = {};
    $fh.forms.getSubmissions(params3, function (err, submissions) {
      if (err) {
        console.log(err);
      } else {
        console.log("get submissions OK");
        console.log('Array of completed submissions', submissions);
        $scope.submissions = submissions;
        $scope.apply();
      }


    });

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
