angular.module('userApp', ['appRoutes'])
    //fix changing url
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);