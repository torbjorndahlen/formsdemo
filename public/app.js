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
  $urlRouterProvider.otherwise("/viewList");

   $stateProvider
     .state('view', {
       url: "/view",
       templateUrl: "js/view/view.html",
       controller: "viewController",
       params: {sub: null}
     })
     .state('viewList', {
       url: "/viewList",
       templateUrl: "js/view/view-list.html",
       controller: "viewListController"
     });

   });

})();
