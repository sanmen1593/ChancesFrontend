var controllers = angular.module('chances.controllers', []);

controllers.controller('ChancesController', ['$scope', 'Request', '$cookieStore', '$rootScope','$http','$location',
    function ($scope, Request, $cookieStore, $rootScope,$http, $location) {
        $scope.formData = {};
        $scope.getChances = function () {
            var url = 'http://ing-sis.jairoesc.com/chanceslist?auth-token=';
            if ($cookieStore.get('auth_token') != null) {
                var promise = Request.get(url + $cookieStore.get('auth_token'))
                        .then(function (response) {
                            $scope.chances = response;
                        }, function (error) {
                            console.log(error);
                        }
                        );
            }
        };

        $scope.newChance = function () {
            $scope.formData.date = $scope.formData.year + '-' + $scope.formData.month + '-' + $scope.formData.day;
            $scope.formData.vehicles_id = $scope.selectedvehicle.id;

            var params = "departure=" + $scope.formData.departure +
                    "&destination=" + $scope.formData.destination +
                    "&date=" + $scope.formData.date +
                    "&fee=" + $scope.formData.fee +
                    "&hour=" + $scope.formData.hour +
                    "&comments=" + $scope.formData.comments +
                    "&route=" + $scope.formData.route +
                    "&capacity=" + $scope.formData.capacity +
                    "&vehicles_id=" + $scope.formData.vehicles_id;
            
            var url = "http://ing-sis.jairoesc.com/chance?auth-token=" + $cookieStore.get('auth_token');

            $http({
                method: 'POST',
                url: url,
                data: params,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                alert(data);
                $location.path('/chances');
                location.reload();
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        };
        $scope.getChances();
    }]);

controllers.filter('RouteFilter', function () {
    return function (route) {
        if (route == 1) {
            return 'Avenida';
        } else if (route == 2) {
            return 'Mamonal';
        } else if (route == 3) {
            return 'Bosque';
        } else if (route == 4) {
            return 'Otros';
        } else {
            return "No hay ruta";
        }
    };
});