(function(){
   var app = angular.module('chanceutb', [
       'ngRoute',
       'app.directives',
       'app.controllers',
       'ngRoute'
   ])
    app.config(function ( $routeProvider ) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/chances-front.html'
            })
            .when('/create_vechicle', {
                templateUrl: 'views/create_vehicle.html'
            })
            .when('/profile-vehicles', {
                templateUrl: 'views/profile_vehicles.html'
            })
            .when('/profile-chance', {
                templateUrl: 'views/profile_chance.html'
            })
            .otherwise( {
                redirectTo: '/'
            })

    });
})();




    create_vechicle

    profile-vehicles

   profile-chance

