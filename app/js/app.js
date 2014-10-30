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

    app.controller('ChanceController', function(){
        this.chance = {
            id: "001",
            free: " free",
            date: "20/02/2014",
            hour:"2:00",
            destination:"utb",
            departure :"manga",
            description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            rout: "pedro de heredia",
            vehicle: [ 1,2,3 ]

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

