var controllers = angular.module('users.controllers', []);

controllers.controller('UserInfoController', ['$scope', '$location', '$cookieStore', 'UserInfoService',
    function ($scope, $location, $cookieStore, UserInfoService) {
        $scope.user = {};
        var url = 'http://ing-sis.jairoesc.com/user?auth-token=';
        if ($cookieStore.get('auth_token') == null) {
            $location.path("/");
        } else {
            var promise = UserInfoService.get(url + $cookieStore.get('auth_token'))
                    .then(function (response) {
                        $scope.user = response;
                    }, function (error) {
                        console.log(error);
                    }
                    );
        }
        console.log($scope.user);
    }]);