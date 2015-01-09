var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleController', ['$scope', '$http', '$location', '$cookieStore',
    function ($scope, $http, $location, $cookieStore) {

        $scope.getVehicles = function () {
            if ($cookieStore.get('auth_token') == null) {
                $location.path("/");
            } else {
                $http({
                    method: 'GET',
                    url: 'http://ing-sis.jairoesc.com/vehicle?auth-token=' + $cookieStore.get('auth_token'),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data) {
                    $scope.vehicles = data;
                }).error(function (data, status, headers, config) {
                    $scope.messageerror = status;
                });
            }
        };
        $scope.formData = {};
        $scope.registerVehicle = function(){
            if($scope.formData.carro != 'undefined'){
                $scope.formData.type = $scope.formData.carro;
            }else if($scope.formData.moto != 'undefined'){
                $scope.formData.type = $scope.formData.moto;
            }else if($scope.formData.otro != 'undefined'){
                $scope.formData.type = $scope.formData.otro;
            }
            var params = "plate="+$scope.formData.plate+"&color=";
        };
        
        $scope.getVehicles();
    }]);