var controllers = angular.module('chances.controllers', []);

controllers.controller('ChancesController', ['$scope', 'Request', '$cookieStore',
    function ($scope, Request, $cookieStore) {
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

        };

        $scope.getChances();
    }]);

controllers.filter('RouteFilter', function () {
    return function (route) {
        if (route == 1) {
            return 'Avenida'; // this will be listed in the results
        }
        if (route == 2) {
            return 'Mamonal';
        }
        if (route == 3) {
            return 'Bosque';
        }
        if (route == 4) {
            return 'Otros';
        }
        return "No hay ruta";
    };
});