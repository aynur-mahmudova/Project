angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/pages/home.html'
    })

    .when('/football', {
        templateUrl: 'app/views/pages/football.html'
    })

    .when('/volleyball', {
        templateUrl: 'app/views/pages/volleyball.html'
    })

    .when('/NBA', {
        templateUrl: 'app/views/pages/NBA.html'
    })

    .when('/F1', {
        templateUrl: 'app/views/pages/F1.html'
    })

    .when('/MMA', {
        templateUrl: 'app/views/pages/MMA.html'
    })

    .when('/winter-sports', {
        templateUrl: 'app/views/pages/winter-sports.html'
    })

    .when('/tennis', {
        templateUrl: 'app/views/pages/tennis.html'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });
});