var devb = angular.module('devb', ['ngRoute']);

devb.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/pages/main.html',
            controller: 'RouteController'
        }).
        when('/aboutme', {
            templateUrl: '/pages/aboutme.html',
            controller: 'RouteController'
        }).
        when('/portfolio', {
            templateUrl: '/pages/portfolio.html',
            controller: 'RouteController'
        }).
        when('/projects', {
            templateUrl: '/pages/projects.html',
            controller: 'RouteController'
        }).
        when('/contact', {
            templateUrl: '/pages/contact.html',
            controller: 'RouteController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

devb.controller("RouteController", function($scope) {

})
