(function (){
	var angularConnection = angular.module('angularConnection',[]);
		function connectionController($scope, $http){
			$scope.formData = {};
			
			// Pedir todos los datos API y cargarlos en el fronend 
			$http.get('http://ing-sis.jairoesc.com/vehicle?auth-token=')
				.success(function(data) {
					$scope.json_encode = data;
					console.log(data)
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});

			// Cuando se añade un nuevo TODO, manda el texto a la API
			$scope.post = function(){
				$http.post('http://ing-sis.jairoesc.com/vehicle', $scope.formData)
					.success(function(data) {
						$scope.formData = {};
						$scope.json_encode = data;
						console.log(data);
					})
					.error(function(data) {
						console.log('Error:' + data);
					});
			};
                    }
})();


  