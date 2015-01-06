var controllers = angular.module('vehicles.controllers', []);

controllers.controller('VehicleListController', ['$scope', '$rootScope', '$http', '$location', 'settings', function ($scope, $rootScope, $http, $location, settings) {
        if (settings.auth_token === '') {
            $location.path("/");
        } else {
            $http({
                method: 'GET',
                url: 'http://ing-sis.jairoesc.com/vehicle?auth-token=' + settings.auth_token,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.vehicles = data;
                console.log(data);
            }).error(function (data, status, headers, config) {
                $scope.messageerror = status;
            });
        }
    }]);