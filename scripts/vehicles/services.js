var services = angular.module('vehicles.services', []);


services.factory("VehiclesInfoService", ['$http', '$q', function ($http, $q) {
        return {
            post: function (url) {
                return $http.post(url).then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
            }
        };
    }]);