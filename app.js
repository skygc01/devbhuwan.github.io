var devb = angular.module('devb', ['ngRoute']);

devb.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/pages/main.html',
            controller: 'RouteController'
        }).
        when('/portfolio', {
            templateUrl: '/pages/portfolio.html',
            controller: 'RouteController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

devb.controller("RouteController", function($scope) {

})
