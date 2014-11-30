(function() {
    var app = angular.module('chanceApp', [
        'app.directives',
        'app.controllers'
    ]);
	console.log('chanceApp module');

    app.config(['$routerProvider', function($routeProvider) {

            $routeProvider.when('session', {
                url: "/",
                templateUrl: "views/session.html",
                controller: 'SessionController'
            }),
            $routeProvider.when('vehicle', {
                url: "/vehicle",
                templateUrl: "views/vehicle_profile.html",
                controller: "VehicleController"
                
            }),
            $routeProvider.when('user', {
                url: "/user",
                templateUrl: "views/user.html",
                controller: 'UserController'
            }),
            $routeProvider.when('chance', {
                url: "/chance",
                templateUrl: "views/chance.html",
                controller: 'ChancerController'
            });

        }]);

})();

