var controllers = angular.module('sessions.controllers', []);

controllers.controller('SessionsController', ['$scope', '$http', function ($scope, $http) {
        $scope.formData = {};
        $scope.processForm = function () {
            var forminfo = "email=" + $scope.formData.email + "&password=" + $scope.formData.password;
            $http({
                method: 'POST',
                url: 'http://ing-sis.jairoesc.com/sessions',
                data: forminfo, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                console.log(data);
                $scope.messageok = data;
            }).error(function (data, status, headers, config) {
                $scope.messageerror = status;
            });
        };
    }]);