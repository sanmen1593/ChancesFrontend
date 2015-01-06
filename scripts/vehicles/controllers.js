var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleListController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        $http({
            method: 'GET',
            url: 'http://ing-sis.jairoesc.com/vehicle?auth-token='+$rootScope.auth_token,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            $scope.vehicles = data;
            console.log(data);
        }).error(function (data, status, headers, config) {
            $scope.messageerror = status;
        });
    }]);