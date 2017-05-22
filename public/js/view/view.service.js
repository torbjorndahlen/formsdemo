(function(){
'use strict';

angular
    .module('view', ['ui.router', 'ngStorage', 'ngFeedHenry', 'ngMaterial'])
    .service('viewService', ['$http', 'FHCloud',
    function($http, FHCloud) {

    var service = {};

    service.ping = function () {
      
        return FHCloud.get('api/ping');

    }


    return service;
}]);
})();
