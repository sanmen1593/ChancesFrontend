(function(){
   var app = angular.module('chanceutb', [
   ]);

    app.controller('PersonaController', function () {
        this.people = {
            id: "001",
            name: "Christian",
            PeopleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
            LastName: "Dachiardi Oliveros",
            email: [ "cristianoliveros_2@hotmail.com" ],
            email_confirmation: "cristianoliveros_2@hotmail.com",
            password: "15.2 lbs (6.9 kg)"
        };
    });


    app.directive('profileLeft', function() {
        return {
            restrict : 'E',
            templateUrl: "../partials/profile-left.html"
        }
    });
    app.directive('chances', function() {
        return {
            restrict : 'E',
            templateUrl: "../partials/chances.html"
        }
    });
    app.directive('mainMenu', function() {
        return {
            restrict : 'E',
            templateUrl: "../partials/menu.html"
        }
    });

    app.controller('ChanceController', function(){
            this.chance={};
            this.chances=[];
            this.addChance = function () {
                this.chances.push(this.chance);
                this.chance = {};
            };

    });

    app.controller('VechicleController', function(){
        this.vehicle ={
            id: "1",
            plate:"jpk123",
            color:"red",
            model:"mazda",
            brand: "",
            capacity:5,
            type: "1"

        };
    });


})();

