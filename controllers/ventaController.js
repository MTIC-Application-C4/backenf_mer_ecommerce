import Venta from '../models/Venta.js'
import Producto from '../models/Producto.js'

/*funciones*/
const getProducto = async(id, cantidad) =>{
    const producto = await Producto.findById(id);

    if(producto.stock === 0){
        console.log(`No hay existencias ${producto.nombre}`);
    }else{
        if ((producto.stock - cantidad) < 0) {
            console.log(`Del prodcuto solicitado hay ${producto.stock}`)
            
        }else{
            producto.stock = producto.stock-cantidad;
            console.log(`Venta registrada de ${producto.nombre} - cantidad ${cantidad}`)
        }
    }  
        
    //await producto.save;
    //return producto;
}


const prueba = (req, res) => {
    res.send({
        msg: "En esta ruta gestionaremos todas las peticiones correspondiente al modelo de Venta"

    })
};

const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);        

        //generar proceso para actualizar el stock del articulo
        //console.log(ventaGuardado);
        //console.log(ventaGuardado.articulos);

        ventaGuardado.articulos.forEach(element => {
            console.log("***********************************")
            getProducto(element.inf._id, element.cantidad)            
            
        });
        const ventaGuardado = await venta.save();
        res.json(ventaGuardado);
        
    } catch (error) {
        console.error(error.message);
    }
};

const getVentas = (req, res) => {};
const getVenta = (req, res) => {};
const updateVentas = (req, res) => {};
const deleteVentas = (req, res) => {};


export {
    prueba,
    createVentas,
    getVentas,
    getVenta,
    updateVentas,
    deleteVentas
};