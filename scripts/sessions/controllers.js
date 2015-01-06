var controllers = angular.module('sessions.controllers', []);

controllers.controller('SessionsController', ['$scope', '$http', '$rootScope', '$location', 'settings', function ($scope, $http, $rootScope, $location, settings) {
        $scope.formData = {};
        $scope.processForm = function () {
            var forminfo = "email=" + $scope.formData.email + "&password=" + $scope.formData.password;
            $http({
                method: 'POST',
                url: 'http://ing-sis.jairoesc.com/sessions',
                data: forminfo, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                settings.auth_token = data.auth_token;
                $scope.messageok = data;
                $location.path("/vehiclelist");
            }).error(function (data, status, headers, config) {
                $scope.messageerror = status;
            });
        };
    }]);