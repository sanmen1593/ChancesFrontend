var app = angular.module('app', ['ngRoute', 'sessions', 'vehicles' , 'users', 'chances', 'ngCookies', 'request']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/", {
            redirectTo: '/login'
        }).when('/login', {
            templateUrl: "views/login.html",
            controller: "SessionsController"
        }).when('/myvehicles', {
            templateUrl: "views/vehiclelist.html",
            controller: "VehicleController"
        }).when('/profile',{
            templateUrl: "views/profile.html",
            controller: "UserController"
        }).when('/signup', {
            templateUrl: "views/signup.html",
            controller: "UserController"
        }).when('/newvehicle', {
            templateUrl: "views/createvehicle.html",
            controller: "VehicleController"
        }).when('/chances',{
            templateUrl: "views/chanceslist.html",
            controller: "ChancesController"
        }).when('/newchance',{
            templateUrl: "views/createchance.html",
            controller: "ChancesController"
        });
    }]).run(['$location', '$cookieStore', function ($location, $cookieStore) {
        if ($cookieStore.get('auth_token') != null && $location.path() == '/login') {
            $location.path('/myvehicles');
        }
        if($cookieStore.get('auth_token') == null && ($location.path() != '/signup')){
            $location.path('/login');
        }
    }]);