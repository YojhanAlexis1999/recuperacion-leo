const router = require('express').Router();
const database = require('../database');

router.get('/productos_loca/:id_categoria/:id_loca', async (req,res) => {
    const {id_categoria, id_loca} = req.params;
    const productos = await database.query("SELECT * FROM productos WHERE id_categorias = ? AND id_loca = ?", [id_categoria,id_loca]);
    res.json({productos})
});

router.get('/categorias_loca/:id', async (req,res) => {
    const {id} = req.params;
    const categorias = await database.query("SELECT c.descripcion,c.img, cl.id_categoria, cl.id_loca FROM categorias c, categorias_local cl WHERE c.id_categorias = cl.id_categoria AND cl.id_loca = ?", [id])
    res.json({categorias})
})

router.get('/productos_loca/:id_producto', async (req,res) => {
    const {id_producto} = req.params
    const producto = await database.query("SELECT * FROM productos WHERE id_productos = ?", [id_producto])
    res.json({producto})
})

router.get('/pedidos', async (req,res) => {
    const pedidos = await database.query("SELECT p.id_pedidos, pro.nombre, p.cantidad, p.precio FROM pedidos p, productos pro WHERE p.id_productos = pro.id_productos");
    res.json({pedidos})
});

router.post('/pedidos', async ( req,res)=>{
    const {id_usuario, id_productos, cantidad, adiciones, precio} = req.body;
    const pedidos = [id_usuario, id_productos, adiciones, cantidad, precio];
    await database.query("Insert Into pedidos(id_usuario,id_productos,adiciones,cantidad,precio) values(?,?,?,?,?)", pedidos);
    res.json({msg:"Pedido Agregado"})
});

router.post('/domicilios', async ( req,res)=>{
    const {id_usuario,direccion, barrio, nombre, telefono} = req.body;
    const domicilios = [id_usuario,direccion, barrio, nombre, telefono];
    await database.query("Insert Into domicilios(id_usuario,direccion, barrio, nombre, telefono) values(?,?,?,?,?)", domicilios);
    res.json({msg:"Domicilio Agregado"})
});



module.exports = router;