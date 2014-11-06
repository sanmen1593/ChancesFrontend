/**
 * Created by christian on 05/11/2014.
 */
(function(){
    angular.module('app.controllers', [
    ])
    .controller('PersonaController', function () {
        this.people = {
            id: "001",
            name: "Christian",
            PeopleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
            LastName: "Dachiardi Oliveros",
            email: [ "cristianoliveros_2@hotmail.com" ],
            email_confirmation: "cristianoliveros_2@hotmail.com",
            password: "15.2 lbs (6.9 kg)"
        };
    })
    .controller('ChanceController', function(){
        this.chance={};
        this.chances=[];
        this.addChance = function () {
            this.chances.push(this.chance);
            this.chance = {};
        };

    })
    .controller('VechicleController', function(){
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

