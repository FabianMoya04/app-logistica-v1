import React, { useState, useEffect } from 'react';
import { getProductos, createProducto, deleteProducto } from './api/apiProductos'; 

const ProductosComponent = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const data = await getProductos();
                setProductos(data);
            } catch (error) {
                console.error('Error fetching productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const handleCreateProducto = async () => {
        const nuevoProducto = {
            id_producto: 123,
            nombre_producto: 'Nuevo Producto',
            descripcion: 'Descripción del nuevo producto',
            cantidad: 50,
            precio: 29.99,
            id_categoria: 2
        };

        try {
            const productoCreado = await createProducto(nuevoProducto);
            setProductos([...productos, productoCreado]);
        } catch (error) {
            console.error('Error creating producto:', error);
        }
    };

    const handleDeleteProducto = async (id_producto) => {
        try {
            await deleteProducto(id_producto);
            setProductos(productos.filter(producto => producto.id_producto !== id_producto));
        } catch (error) {
            console.error('Error deleting producto:', error);
        }
    };

    return (
        <div>
            <h1>Productos</h1>
            <button onClick={handleCreateProducto}>Crear Producto</button>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id_producto}>
                        {producto.nombre_producto}
                        <button onClick={() => handleDeleteProducto(producto.id_producto)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductosComponent;
