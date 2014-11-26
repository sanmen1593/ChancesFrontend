//solicitamos los datos de la ruta getData para obtener todos los posts
//de la bd en formato json
(function() {
    var vehicleapp = angular.module('chanceutb', []);
    vehicleapp.controller('VehicleController', function($scope, $http) {

        $http.get('http://ing-sis.jairoesc.com/vehicle?auth-token=eyJpdiI6IjlKTjBZWkR5U2V0WEJBUlZxc3c2b1E9PSIsInZhbHVlIjoiVUVtZUVLT1JNekRlUlBKVmUrazl1eitMOU5Fa2puR01qVjZleG1ZQTR0dz0iLCJtYWMiOiJhM2ViNjRhMzU1NTJiYmMxNmM0YWUzZDdmNzQ1NjMwMjgzZWU0NGQzYzZkYzUzMTZlN2ViMGI2ZGNlNzA2OWZmIn0=').success(function(data)
        {
            $scope.datos = data.posts;//así enviamos los posts a la vista
        });

       });
})();

