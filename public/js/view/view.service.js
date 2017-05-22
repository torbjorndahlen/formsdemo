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

    service.getFile = function (fileGroupId) {
        return FHCloud.get('api/file/:' + fileGroupId);
    }


    return service;
}]);
})();
