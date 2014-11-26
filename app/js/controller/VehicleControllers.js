(function (){
	var vehicleapp = angular.module('chance',[]);
	vehicleapp.controller('VehicleController', function() {
		this.vehicle = {
			id: 1,
			plate:'jpk123',
			color:'red',
			model:'mazda',
			brand: 'lsls',
			capacity:5,
			type: 1
		};
	});
})();

