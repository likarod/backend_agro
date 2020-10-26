const express = require('express');
const modulo = require('./modulos/moduloControlador.js');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'build')));
app.use(cors());


/* Rutas del GET*/ 
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.get('/buscarProducto/:query', modulo.getArticulos);
app.get('/mostarDireccion');

/* Rutas del POST */ 
app.post('/guadarProductor');
app.post('/guardarConsumidor');
app.post('/realizarCompra');


// app.listen(3000, function ( ){
//     console.log('¡Aplicación de ejemplo escuchando en el puerto 3000!')
// })