import React, { useState, useEffect } from 'react';
import { getProductos, createProducto, deleteProducto } from '../api/apiProductos'; 

const ProductosComponent = () => {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre_producto: '',
        descripcion: '',
        cantidad: '',
        precio: '',
        id_categoria: ''
    });

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
        try {
            const productoCreado = await createProducto(nuevoProducto);
            setProductos([...productos, productoCreado]);
            setNuevoProducto({
                nombre_producto: '',
                descripcion: '',
                cantidad: '',
                precio: '',
                id_categoria: ''
            });
        } catch (error) {
            console.error('Error creating producto:', error);
        }
    };

    const handleDeleteProducto = async (_id) => {
        try {
            await deleteProducto(id_producto);
            setProductos(productos.filter(producto => producto._id !== _id));
        } catch (error) {
            console.error('Error deleting producto:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    return (
        <div>
            <h1>Productos</h1>
            <div>
                <h2>Agregar Producto</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleCreateProducto();
                }}>
                    <div>
                        <label>Nombre del Producto:</label>
                        <input
                            type="text"
                            name="nombre_producto"
                            value={nuevoProducto.nombre_producto}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={nuevoProducto.descripcion}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Cantidad:</label>
                        <input
                            type="number"
                            name="cantidad"
                            value={nuevoProducto.cantidad}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input
                            type="number"
                            step="0.01"
                            name="precio"
                            value={nuevoProducto.precio}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>ID Categoría:</label>
                        <input
                            type="number"
                            name="id_categoria"
                            value={nuevoProducto.id_categoria}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Crear Producto</button>
                </form>
            </div>
            <div>
                <h2>Lista de Productos</h2>
                <ul>
                    {productos.map(producto => (
                        <li key={producto._id}>
                            {producto.nombre_producto}
                            <button onClick={() => handleDeleteProducto(producto._id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductosComponent;
