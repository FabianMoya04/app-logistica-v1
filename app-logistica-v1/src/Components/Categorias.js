import React, { useState } from 'react';
import Modal from 'react-modal';

const Categorias = () => {
    // Estado para controlar si el modal está abierto o cerrado
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Estado para los campos del formulario
    const [categoria, setCategoria] = useState({
        id: '',
        nombre: '',
    });

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
        // Aquí puedes implementar la lógica para agregar la nueva categoría
        console.log(categoria);
        closeModal(); // Cerrar el modal después de añadir la categoría
    };

    return (
        <div className="container">
            <h1 className="mt-4">Categorías</h1>
            <div className="d-flex justify-content-between mb-4">
                <h2>Listado de Categorías</h2>
                <button className="btn btn-primary" onClick={openModal}>
                    Agregar nueva categoría
                </button>
            </div>

            {/* Tabla de categorías */}
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                </tr>
                </thead>
                <tbody>
                {/* Aquí irán los datos de las categorías */}
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
