import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Puedes instalar react-icons si no lo tienes

const Productos = () => {
    // Estado para controlar si el modal está abierto o cerrado
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [productos, setProductos] = useState([]); // Estado inicial para productos
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        cantidad: '',
        precio: '',
        categoria: '',
        imagen: null,
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleImageChange = (e) => {
        setProducto({ ...producto, imagen: e.target.files[0] });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setProductos([...productos, { ...producto, id: productos.length + 1 }]); // Añade el nuevo producto a la lista
        closeModal(); // Cerrar el modal después de añadir el producto
        setProducto({ // Resetear el formulario
            nombre: '',
            descripcion: '',
            cantidad: '',
            precio: '',
            categoria: '',
            imagen: null,
        });
    };

    return (
        <div className="container">
            <h1 className="mt-4">Productos</h1>
            <div className="d-flex justify-content-between mb-4">
                <h2>Listado de Productos</h2>
                <button className="btn btn-primary" onClick={openModal}>
                    Agregar nuevo producto
                </button>
            </div>

            {/* Tabla de productos */}
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Imagen</th>
                    <th>Acciones</th> {/* Columna de acciones */}
                </tr>
                </thead>
                <tbody>
                {productos.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.nombre}</td>
                        <td>{prod.descripcion}</td>
                        <td>{prod.cantidad}</td>
                        <td>{prod.precio}</td>
                        <td>{prod.categoria}</td>
                        <td>{prod.imagen ? prod.imagen.name : 'Sin imagen'}</td>
                        <td>
                            <FaEdit className="text-warning me-2" onClick={() => {/* Lógica para editar */}} />
                            <FaTrash className="text-danger" onClick={() => {/* Lógica para eliminar */}} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal para el formulario de agregar producto */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar Producto"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Producto</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={producto.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="descripcion"
                                    name="descripcion"
                                    value={producto.descripcion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cantidad" className="form-label">Cantidad:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cantidad"
                                    name="cantidad"
                                    value={producto.cantidad}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="precio"
                                    name="precio"
                                    value={producto.precio}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoria" className="form-label">Categoría:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoria"
                                    name="categoria"
                                    value={producto.categoria}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagen" className="form-label">Imagen:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="imagen"
                                    name="imagen"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Listo</button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Productos;
