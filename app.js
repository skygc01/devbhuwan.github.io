var devb = angular.module('devb', ['ngRoute']);

devb.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'main.html',
            controller: 'RouteController'
        }).
        when('/portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'RouteController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

devb.controller("RouteController", function($scope) {

})
