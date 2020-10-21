const mariadb = require ("mariadb");

// DATOS PARA REALIZAR LA CONEXION CON MARIADB.

const pool = mariadb.createPool({
    host: 'db4free.net',
    user: 'farme_20102020',
    password: 'PSICOLINA-35',
    connectionLimit: 5,
    database: 'farmespace_bd'
})


// Seleccionar los productos y los precios.

exports.dameProductoPrecioProductor = async (nombre) => {
    let conn;
    try{
        conn = await pool.getConnection();
        let res = await conn.query(`SELECT Producto.Producto, Productor.razonSocial, ProductorProducto.PrecioProducto, Direccion.DescripcionCanton FROM Producto, ProductorProducto, Productor, Direccion WHERE Producto.Producto=(?) AND Producto.CIIU=ProductorProducto.CIIU AND Productor.productorID=ProductorProducto.productorID AND Productor.productorID=Direccion.productorID`, [nombre]);
        return res
    }catch(e){
        console.log(e)
        return null
    }finally {
        if(conn) conn.release();
    }
}