import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Categorias = () => {
    // Estado para controlar si el modal está abierto o cerrado
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Estado para los campos del formulario
    const [categoria, setCategoria] = useState({
        id: '',
        nombre: '',
    });

    // Estado para la lista de categorías
    const [categorias, setCategorias] = useState([]);

    // Estado para el texto de búsqueda
    const [searchText, setSearchText] = useState('');

    // Funciones para abrir y cerrar el modal
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategoria({ ...categoria, [name]: value });
    };

    // Manejar envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCategorias([...categorias, categoria]); // Agregar nueva categoría
        setCategoria({ id: '', nombre: '' }); // Limpiar el formulario
        closeModal(); // Cerrar el modal después de añadir la categoría
    };

    // Manejar eliminación de categoría
    const handleDelete = (id) => {
        setCategorias(categorias.filter(cat => cat.id !== id));
    };

    return (
        <div className="container">
            <h1 className="mt-4">Categorías</h1>
            <div className="d-flex justify-content-between mb-4">
                <h2>Listado de Categorías</h2>
                <button className="btn btn-primary ms-3" onClick={openModal}>
                    Agregar nueva categoría
                </button>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar categorías..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Tabla de categorías */}
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {categorias
                    .filter(cat => cat.nombre.toLowerCase().includes(searchText.toLowerCase()))
                    .map(cat => (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.nombre}</td>
                            <td>
                                <button className="btn btn-link text-info" onClick={() => console.log("Edit", cat)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-link text-danger" onClick={() => handleDelete(cat.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para el formulario de agregar categoría */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar Categoría"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Categoría</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    name="id"
                                    value={categoria.id}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={categoria.nombre}
                                    onChange={handleInputChange}
                                    required
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

export default Categorias;
