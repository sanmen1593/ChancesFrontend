var controllers = angular.module('users.controllers', []);

controllers.controller('UserController', ['$scope', '$location', '$cookieStore', 'UserInfoService', '$http',
    function ($scope, $location, $cookieStore, UserInfoService, $http) {
        $scope.user = {};

        $scope.getUserInfo = function () {
            var url = 'http://ing-sis.jairoesc.com/user?auth-token=';
            if ($cookieStore.get('auth_token') != null) {
                var promise = UserInfoService.get(url + $cookieStore.get('auth_token'))
                        .then(function (response) {
                            $scope.user = response;
                        }, function (error) {
                            console.log(error);
                        }
                        );
            }
        };

        $scope.formData = {};
        $scope.registerUser = function () {
            if ($scope.formData.email != $scope.formData.email_confirmation) {
                $scope.emailerror = "Los emails deben ser iguales";
            }
            
            
            var params = "name=" + $scope.formData.name +
                    "&lastname=" + $scope.formData.lastname +
                    "&email=" + $scope.formData.email +
                    "&email_confirmation=" + $scope.formData.email_confirmation +
                    "&password=" + $scope.formData.password;
            console.log(params);
            $http({
                method: 'POST',
                url: 'http://ing-sis.jairoesc.com/signup',
                data: params, // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                console.log(data);
                $scope.messageok = data;
                alert(data);
                $location.path('/login');
                location.reload();
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        };

        $scope.getUserInfo();
    }]);