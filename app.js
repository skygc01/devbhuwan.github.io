var devb = angular.module('devb', ['ngRoute']);

devb.config(['$routeProvider',
    function ($routeProvider) {
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

devb.controller("RouteController", function ($scope, $route, $location, $interval) {
    $scope.experience = {
        startDate: new Date("January 1, 2014 00:00:00"),
        noOfYears: '0',
        noOfMonths: '0',
        noOfDays: '0',
        noOfHours: '04',
        noOfMinutes: '04',
        noOfSeconds: '56'
    };

    $scope.init = function () {
        if ($location.path().indexOf("aboutme") > -1) {
            $scope.evalExperienceTimeWindow();
            $interval(function () {
                $scope.evalExperienceTimeWindow();
            }, 1000);
        }

        var currentTab = $location.path();
        currentTab = currentTab.substr(1, currentTab.length);
        var currentTabElememt = "#" + currentTab + "";
        angular.element(".navbar-link").removeClass('menuActive');
        angular.element(currentTabElememt).addClass('menuActive');

    };

    $scope.evalExperienceTimeWindow = function () {
        var currentDate = new Date();
        $scope.experience.noOfYears = currentDate.getFullYear() - $scope.experience.startDate.getFullYear();
        $scope.experience.noOfMonths = currentDate.getMonth() - $scope.experience.startDate.getMonth();
        $scope.experience.noOfDays = currentDate.getDate() - 1;
        $scope.experience.noOfHours = "" + $scope.getDoubleDigitIfNotExist(currentDate.getHours()) + "";
        $scope.experience.noOfMinutes = "" + $scope.getDoubleDigitIfNotExist(currentDate.getMinutes()) + "";
        $scope.experience.noOfSeconds = "" + $scope.getDoubleDigitIfNotExist(currentDate.getSeconds()) + "";
    };


    $scope.getDoubleDigitIfNotExist = function (val) {
        val = "" + val + "";
        if (val.length < 2) {
            return "0" + val;
        }
        return val;
    };

    $scope.init();
});
