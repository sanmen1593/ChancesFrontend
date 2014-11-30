
(function() {
    var chanceApp = angular.module('chanceApp', []);
    chanceApp.controller('VehicleController', function($scope, $http) {

        $http.get('http://ing-sis.jairoesc.com/vehicle?auth-token=eyJpdiI6IlU1UVBMdVF6XC91eERBZHVScTIzSGN3PT0iLCJ2YWx1ZSI6ImRndlNLcUN0OTFtcWtYYW83T2l4SDBvZUdBc3ZcL1VCQ2pYbXVvS3NCdDV3PSIsIm1hYyI6IjgwZGMyNTc3MzA4NzUyMTk3YTI5ZDhmY2JjY2Q1NTRkMmI1ZjBjMTE3N2I0MGU2YTc1YzlmZTAwMzVkYTQyNWEifQ==')
                //así enviamos los posts a la vista
                .success(function(data) {
                    $scope.datos = data;
                    console.log(data);
                })
                .error(function(data) {

                    console.log('Error' + data);
                });

        // Cuando se añade un nuevo TODO, manda el texto a la API
        $scope.save = function() {
            $http.post('http://ing-sis.jairoesc.com/vehicle', $scope.vehicleData)
                    .success(function(data) {
                        var auth_token = 'eyJpdiI6IlU1UVBMdVF6XC91eERBZHVScTIzSGN3PT0iLCJ2YWx1ZSI6ImRndlNLcUN0OTFtcWtYYW83T2l4SDBvZUdBc3ZcL1VCQ2pYbXVvS3NCdDV3PSIsIm1hYyI6IjgwZGMyNTc3MzA4NzUyMTk3YTI5ZDhmY2JjY2Q1NTRkMmI1ZjBjMTE3N2I0MGU2YTc1YzlmZTAwMzVkYTQyNWEifQ==';
                        $scope.vehicleData = {};
                        $scope.datos = data + auth_token;
                        //console.log(data+$token);
                    })
                    .error(function(data) {
                        console.log('Error:' + data);
                    });
        };

		// uso de filtros en por categoria 
		$scope.filterCategory = 'vehicle';
			$scope.setfilterCategory=function(category){
			$scope.filterCategory=category;
		}
		
    }),
	
	chanceApp.controller('MasterController', function($scope) {
		$scope.categories = ['Chance','Vehicle','Friend'];
		$scope.menus = [
		{id:1,name:'Vehicle',url:'http://ing-sis.jairoesc.com/vehicle',menus:'Vehicle'},
		{id:2,name:'Chance',url:'http://ing-sis.jairoesc.com/chance',menus:'Chance'},
		{id:3,name:'Friend',url:'http://ing-sis.jairoesc.com/friend',menus:'Friend'}
		];
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