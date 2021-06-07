const router = require('express').Router();
const database = require('../database');

router.get('/productos_loca/:id_categoria/:id_loca', async (req,res) => {
    const {id_categoria, id_loca} = req.params;
    const productos = await database.query("SELECT * FROM productos WHERE id_categorias = ? AND id_loca = ?", [id_categoria,id_loca]);
    res.json({productos})
});

router.get('/categorias_loca/:id', async (req,res) => {
    const {id} = req.params;
    const categorias = await database.query("SELECT c.img, cl.id_categoria, cl.id_loca FROM categorias c, categorias_local cl WHERE c.id_categorias = cl.id_categoria AND cl.id_loca = ?", [id])
    res.json({categorias})
})

router.get('/productos_loca/:id_producto', async (req,res) => {
    const {id_producto} = req.params
    const producto = await database.query("SELECT * FROM productos WHERE id_productos = ?", [id_producto])
    res.json({producto})
})

router.get('/pedidos', async (req,res) => {
    const pedidos = await database.query("select * from pedidos" );
    res.json({pedidos})
});

router.post('/pedidos', async ( req,res)=>{
    const {id_usuario, id_productos, cantidad,precio} = req.body;
    const pedidos = [id_usuario, id_productos, cantidad,precio];
    await database.query("Insert Into pedidos(id_usuario, id_productos, cantidad,precio) values(?,?,?,?)", pedidos);
    res.json({msg:"Pedido Agregado"})
});



module.exports = router;