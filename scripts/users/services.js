var services = angular.module('user.services', []);

services.factory("UserInfoService", ['$http', '$q', function ($http, $q) {
        return {
            get: function (url) {
                return $http.get(url).then(function (response) {
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
        //return $resource(url, {}, {get: {method: "GET", isArray: false}});
    }]);