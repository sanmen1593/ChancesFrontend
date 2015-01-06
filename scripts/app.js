var app = angular.module('app', ['ngRoute', 'sessions', 'vehicles']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/", {
            redirectTo: '/login'
        }).when('/login', {
            templateUrl: "views/login.html",
            controller: "SessionsController"
        }).when('/vehiclelist',{
            templateUrl: "views/vehiclelist.html"
        }).otherwise({reditrectTo: "/login"});
    }]);

app.value('settings', {
    auth_token: ''
});