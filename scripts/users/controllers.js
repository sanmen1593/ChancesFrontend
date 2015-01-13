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
            
            var url = 'http://ing-sis.jairoesc.com/signup'
            var promise = UserInfoService.post(url, params)
                    .then(function (response) {
                        alert(response.data);
                        $location.path('/login');
                        location.reload();
                    }, function (error) {
                        console.log(error);
                    }
                    );
        };



        $scope.getUserInfo();
    }]);