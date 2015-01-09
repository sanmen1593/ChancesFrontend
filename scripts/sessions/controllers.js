var controllers = angular.module('sessions.controllers', []);

controllers.controller('SessionsController', ['$scope', '$http', '$location', '$cookieStore', '$route',
    function ($scope, $http, $location, $cookieStore, $route) {
        $scope.formData = {};
        //Si está logueado, redirigir de la pag principal o del login a /myvehicles
        if ($cookieStore.get('auth_token') != null && ($location.path() == '/' || $location.path('#/login'))) {
            $location.path('/myvehicles');
        }

        $scope.login = function () {
            var forminfo = "email=" + $scope.formData.email + "&password=" + $scope.formData.password;
            $http({
                method: 'POST',
                url: 'http://ing-sis.jairoesc.com/sessions',
                data: forminfo, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                if (data.auth_token == null) {
                    $scope.autherror = 'Error de autenticación.';
                    $scope.formData.email = null;
                    $scope.formData.password = null;
                } else {
                    $cookieStore.put('auth_token', data.auth_token);
                    $scope.messageok = data;
                    $location.path('/myvehicles');
                    location.reload();
                }
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        };

        $scope.logout = function () {
            $cookieStore.remove('auth_token');
            $location.path('/login');
            location.reload();
        };

        $scope.logged = function () {
            if ($cookieStore.get('auth_token') != null) {
                return true;
            } else {
                return false;
            }
        };
    }]);