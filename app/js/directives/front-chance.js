/**
 * Created by christian on 03/11/2014.
 */
(function(){
     angular.module('app.directives', [
    ])
        .directive('profileLeft', function() {
            return {
                restrict : 'E',
                templateUrl: "../partials/profile-left.html"
            }
        })
   .directive('chances', function() {
        return {
            restrict : 'E',
            templateUrl: "../partials/chances.html"
        }
    })
   .directive('mainMenu', function() {
        return {
            restrict : 'E',
            templateUrl: "../partials/menu.html"
        }
    });


})();

