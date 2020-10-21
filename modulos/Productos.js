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

exports.dameProductoPrecio = async (nombre) => {
    let conn;
    try{
        conn = await pool.getConnection();
        let res = await conn.query(`SELECT Producto.Producto, ProductorProducto.PrecioProducto FROM Producto, ProductorProducto WHERE Producto.Producto=(?) AND Producto.CIIU=ProductorProducto.CIIU`, [nombre]);
        return res
    }catch(e){
        console.log(e)
        return null
    }finally {
        if(conn) conn.release();
    }
}