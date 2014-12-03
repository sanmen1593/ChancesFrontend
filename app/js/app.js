(function() {
    var app = angular.module('chanceApp', [
        'app.directives',
        'app.controllers',
		'ngResource'
    ])
	var urlApp='http://ing-sis.jairoesc.com/', authToken='eyJpdiI6IlU1UVBMdVF6XC91eERBZHVScTIzSGN3PT0iLCJ2YWx1ZSI6ImRndlNLcUN0OTFtcWtYYW83T2l4SDBvZUdBc3ZcL1VCQ2pYbXVvS3NCdDV3PSIsIm1hYyI6IjgwZGMyNTc3MzA4NzUyMTk3YTI5ZDhmY2JjY2Q1NTRkMmI1ZjBjMTE3N2I0MGU2YTc1YzlmZTAwMzVkYTQyNWEifQ==';	
	
	
	.factory('chanceApp',function($resource){
		//return $resource(urlApp + 'vehicle?auth-token=' + authToken);
		return $resource('http://ing-sis.jairoesc.com/vehicle?auth-token=eyJpdiI6IlU1UVBMdVF6XC91eERBZHVScTIzSGN3PT0iLCJ2YWx1ZSI6ImRndlNLcUN0OTFtcWtYYW83T2l4SDBvZUdBc3ZcL1VCQ2pYbXVvS3NCdDV3PSIsIm1hYyI6IjgwZGMyNTc3MzA4NzUyMTk3YTI5ZDhmY2JjY2Q1NTRkMmI1ZjBjMTE3N2I0MGU2YTc1YzlmZTAwMzVkYTQyNWEifQ==/:id');
	})
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

