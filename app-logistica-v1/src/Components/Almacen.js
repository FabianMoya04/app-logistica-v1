import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Almacen = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [orden, setOrden] = useState({
        id: '',
        idCliente: '',
        fecha: '',
    });
    const [ordenes, setOrdenes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        setIsEditing(false); // Reiniciar el estado de edición al abrir el modal
        setOrden({ id: '', idCliente: '', fecha: '' }); // Limpiar el formulario
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false); // Reiniciar el estado de edición al cerrar el modal
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrden({ ...orden, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Editar orden existente
            setOrdenes(ordenes.map(ord => (ord.id === orden.id ? orden : ord)));
        } else {
            // Agregar nueva orden
            setOrdenes([...ordenes, orden]);
        }
        closeModal(); // Cerrar el modal después de añadir o editar la orden
    };

    const handleEdit = (ord) => {
        setOrden(ord); // Cargar los datos de la orden seleccionada en el formulario
        setIsEditing(true); // Cambiar el estado a edición
        openModal(); // Abrir el modal
    };

    const handleDelete = (id) => {
        setOrdenes(ordenes.filter(ord => ord.id !== id));
    };

    return (
        <div className="container">
            <h1 className="mt-4">Almacén</h1>
            <div className="d-flex justify-content-between mb-4">
                <h2>Listado de Órdenes</h2>
                <button className="btn btn-primary ms-3" onClick={openModal}>
                    Agregar nueva orden
                </button>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar órdenes..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Tabla de órdenes */}
            <table className="table">
                <thead>
                <tr>
                    <th>ID Orden</th>
                    <th>ID Cliente</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {ordenes
                    .filter(ord => ord.idCliente.toLowerCase().includes(searchText.toLowerCase()))
                    .map(ord => (
                        <tr key={ord.id}>
                            <td>{ord.id}</td>
                            <td>{ord.idCliente}</td>
                            <td>{ord.fecha}</td>
                            <td>
                                <button className="btn btn-link text-info" onClick={() => handleEdit(ord)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-link text-danger" onClick={() => handleDelete(ord.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para el formulario de agregar o editar orden */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar o Editar Orden"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{isEditing ? 'Editar Orden' : 'Agregar Orden'}</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID Orden:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    name="id"
                                    value={orden.id}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="idCliente" className="form-label">ID Cliente:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="idCliente"
                                    name="idCliente"
                                    value={orden.idCliente}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fecha" className="form-label">Fecha:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="fecha"
                                    name="fecha"
                                    value={orden.fecha}
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

export default Almacen;
