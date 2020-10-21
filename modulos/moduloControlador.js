const bbddProducto = require('./Productos.js')


exports.getArticulos = (req, res) => {
    console.log("entrando")
    bbddProducto.dameProductoPrecio ("CULTIVO DE CACAO.")
    .then((datos) => {
        console.log("enviado")
        res.json(datos)
    })
    .catch((e)=> console.log('ocurrio un error'+ e))
}