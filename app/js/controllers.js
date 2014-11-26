
(function() {
    var vehicleapp = angular.module('chanceApp', []);
    vehicleapp.controller('VehicleController', function($scope, $http) {

        $http.get('http://ing-sis.jairoesc.com/vehicle?auth-token=eyJpdiI6IlwvN0dnYmhFTVZxYm9LRnozQkdBZmV3PT0iLCJ2YWx1ZSI6IlN0eWQxMmY2b25nNm16TStaTXd4WGNcL29iVERlMVh3WGZJR3ErNTNJbWg4PSIsIm1hYyI6ImI3NDlhZGExNzZlMDdkZjEzNzFhN2M3MjdmYTA3N2Q0MzdlNDg1NzY2ZjYzYjJkNzZhNzYzNjUzOTljOWU4MGEifQ==')
                //así enviamos los posts a la vista
                .success(function(data) {
                    $scope.datos = data;
                    console.log(data);
                })
        .error(function(data) {

            console.log('Error' + data);
        });
        
        
        
    });



})();


/*
 (function() {
 var vehicleapp = angular.module('chanceApp', []);
 vehicleapp.controller('VehicleController', function($scope, $http)  {
 $scope.datos = [{"id": "3", "plate": "HJJ832", "color": "Verde", "brand": "Renault", "model": "Sandero 2010", "capacity": "2", "status": "1", "type": "1", "users_id": "3", "created_at": "2014-10-21 20:22:06", "updated_at": "2014-10-21 20:22:06"},
 {"id": "2", "plate": "HJJ832", "color": "Verde", "brand": "Renault", "model": "Sandero 2010", "capacity": "2", "status": "1", "type": "1", "users_id": "2", "created_at": "2014-9-21 20:22:06", "updated_at": "2014-11-21 20:22:06"}
 ];
 });
 
 
 
 })();*/