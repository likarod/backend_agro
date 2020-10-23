const express = require('express');
const modulo = require('./modulos/moduloControlador.js');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'build')));
app.use(cors());

/* Rutas del GET*/ 
app.get('/*', modulo.mostrarOtrasRutas)
app.get('/buscarProducto/:query', modulo.getArticulos);
app.get('/mostarDireccion');

/* Rutas del POST */ 
app.post('/guadarProductor');
app.post('/guardarConsumidor');
app.post('/realizarCompra');


app.listen(5000, function ( ){
    console.log('¡Aplicación de ejemplo escuchando en el puerto 5000!')
})