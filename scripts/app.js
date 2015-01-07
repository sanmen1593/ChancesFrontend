var app = angular.module('app', ['ngRoute', 'sessions', 'vehicles' , 'users', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/", {
            redirectTo: '/login'
        }).when('/login', {
            templateUrl: "views/login.html",
            controller: "SessionsController"
        }).when('/myvehicles', {
            templateUrl: "views/vehiclelist.html"
        }).when('/profile',{
            templateUrl: "views/profile.html"
        });
    }]).run(['$location', '$cookieStore', function ($location, $cookieStore) {
        if ($cookieStore.get('auth_token') != null && $location.path() == '/login') {
            $location.path('/myvehicles');
        }
    }]);