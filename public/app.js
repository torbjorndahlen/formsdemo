(function(){
  'use strict';
var cmsapp = angular.module('formsdemo', [
  'ui.router',
  'view'
]);

cmsapp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('md-boilerplate-theme')
    .primaryPalette('red')
    .accentPalette('indigo')
    .warnPalette('deep-purple')
    .backgroundPalette('grey');

  //$mdThemingProvider.theme('dark-red').dark();

  $mdThemingProvider.setDefaultTheme('default');

  //$mdThemingProvider.disableTheming();
});

cmsapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/view");

   $stateProvider
     .state('view', {
       url: "/view",
       views: {
         '': {
           templateUrl: "js/view/view.html"
         }
       },
       controller: "viewController"
     });

   });

})();
