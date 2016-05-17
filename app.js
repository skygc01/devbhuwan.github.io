var devb = angular.module('devb', ['ngRoute']);

devb.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'index.html'
        }).
        when('/portfolio', {
            templateUrl: 'portfolio.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
