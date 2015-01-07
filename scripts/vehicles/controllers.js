var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleListController', ['$scope', '$http', '$location', '$cookieStore',
    function ($scope, $http, $location, $cookieStore) {
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
    }]);