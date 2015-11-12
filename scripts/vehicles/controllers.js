var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleController', ['$scope', '$location', '$cookieStore', 'Request', '$http',
    function($scope, $location, $cookieStore, Request, $http) {

        $scope.getVehicles = function() {
            if ($cookieStore.get('auth_token') == null) {
                $location.path("/");
            } else {
                url = 'http://ing-sis.jairoesc.com/vehicle?auth-token=' + $cookieStore.get('auth_token');
                var promise = Request.get(url)
                        .then(function(response) {
                            $scope.vehicles = response;
                        }, function(error) {
                            console.log(error);
                        }
                        );
            }
        };
        $scope.formData = {};
        $scope.registerVehicle = function() {
            var params = "plate=" + $scope.formData.plate +
                    "&color=" + $scope.formData.color +
                    "&brand=" + $scope.formData.brand +
                    "&model=" + $scope.formData.model +
                    "&capacity=" + $scope.formData.capacity +
                    "&type=" + $scope.formData.tipovehicle;

            var url = "http://ing-sis.jairoesc.com/vehicle?auth-token=" + $cookieStore.get('auth_token');

            $http({
                method: 'POST',
                url: url,
                data: params, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data) {
                if (data != 'undefined' && data != null) {
                    alert("Vehiculo creado correctamente");
                }
                $location.path('/myvehicles');
                location.reload();
            }).error(function(data, status, headers, config) {
                console.log(data);
            });
        };

        $scope.getVehicles();
    }]);