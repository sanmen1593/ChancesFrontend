var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleController', ['$scope', '$location', '$cookieStore', 'Request',
    function ($scope, $location, $cookieStore, Request) {

        $scope.getVehicles = function () {
            if ($cookieStore.get('auth_token') == null) {
                $location.path("/");
            } else {
                url = 'http://ing-sis.jairoesc.com/vehicle?auth-token=' + $cookieStore.get('auth_token');
                var promise = Request.get(url)
                        .then(function (response) {
                            $scope.vehicles = response;
                        }, function (error) {
                            console.log(error);
                        }
                        );
            }
        };
        $scope.formData = {};
        $scope.registerVehicle = function () {
            if ($scope.formData.carro != 'undefined') {
                $scope.formData.type = $scope.formData.carro;
            } else if ($scope.formData.moto != 'undefined') {
                $scope.formData.type = $scope.formData.moto;
            } else if ($scope.formData.otro != 'undefined') {
                $scope.formData.type = $scope.formData.otro;
            } else {
                $scope.errortype = "Tipo de vehiculo invalido";
            }
            var params = "plate=" + $scope.formData.plate +
                    "&color=" + $scope.formData.color +
                    "&brand=" + $scope.formData.brand +
                    "&model=" + $scope.formData.model +
                    "&capacity=" + $scope.formData.capacity +
                    "&type=" + $scope.formData.type;

            var url = "http://ing-sis.jairoesc.com/vehicle?auth-token=" + $cookieStore.get('auth_token');

            $http({
                method: 'POST',
                url: url,
                data: params, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                alert(data.message);
                $location.path('/myvehicles');
                location.reload();
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        };

        $scope.getVehicles();
    }]);