var controllers = angular.module('sessions.controllers', []);

controllers.controller('SessionsController', ['$scope', '$http', '$location', '$cookieStore',
    function ($scope, $http, $location, $cookieStore) {
        $scope.formData = {};
        $scope.processForm = function () {
            var forminfo = "email=" + $scope.formData.email + "&password=" + $scope.formData.password;
            $http({
                method: 'POST',
                url: 'http://ing-sis.jairoesc.com/sessions',
                data: forminfo, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $cookieStore.put('auth_token', data.auth_token);
                $scope.messageok = data;
                $location.path("/myvehicles");
            }).error(function (data, status, headers, config) {
                $scope.messageerror = status;
            });
        };
    }]);