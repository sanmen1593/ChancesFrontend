var express 	= require('express');
var app 		= express();
var chance 	= require('chance');

// Conexión con la base de datos
chance.connect('chnacedb://http://ing-sis.jairoesc.com');

// Configuración
app.configure(function() {
    // Localización de los ficheros estáticos
    app.use(express.static(__dirname + '/public'));
    // Muestra un log de todos los request en la consola		
    app.use(express.logger('dev'));	
    // Permite cambiar el HTML con el método POST					
    app.use(express.bodyParser());
    // Simula DELETE y PUT						
    app.use(express.methodOverride());					
});
/*
// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});
*/