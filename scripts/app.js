var app = angular.module('app', ['ngRoute', 'sessions']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/", {
            redirectTo: '/login'
        }).when('/login', {
            templateUrl: "views/login.html"
        }).otherwise({reditrectTo: "/login"});
    }]);