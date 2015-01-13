var services = angular.module('request', []);

services.factory("Request", ['$http', '$q', function ($http, $q) {
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
            },
            post: function (url, params) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: params,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                }).error(function (response) {
                    console.log(response);
                    // something went wrong
                    return $q.reject(response.data);
                });
            }
        };
    }]);