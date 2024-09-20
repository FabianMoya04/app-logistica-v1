import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Miembros = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [miembro, setMiembro] = useState({
        id: '',
        nombreCompleto: '',
        email: '',
        password: '',
        rol: 'usuario', // Valor por defecto
    });
    const [miembros, setMiembros] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        setIsEditing(false); // Reiniciar el estado de edición al abrir el modal
        setMiembro({ id: '', nombreCompleto: '', email: '', password: '', rol: 'usuario' }); // Limpiar el formulario
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false); // Reiniciar el estado de edición al cerrar el modal
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMiembro({ ...miembro, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Editar miembro existente
            setMiembros(miembros.map(m => (m.id === miembro.id ? miembro : m)));
        } else {
            // Agregar nuevo miembro
            setMiembros([...miembros, { ...miembro, id: miembros.length + 1 }]); // Simulando ID autoincremental
        }
        closeModal(); // Cerrar el modal después de añadir o editar el miembro
    };

    const handleEdit = (m) => {
        setMiembro(m); // Cargar los datos del miembro seleccionado en el formulario
        setIsEditing(true); // Cambiar el estado a edición
        openModal(); // Abrir el modal
    };

    const handleDelete = (id) => {
        setMiembros(miembros.filter(m => m.id !== id));
    };

    return (
        <div className="container">
            <h1 className="mt-4">Miembros</h1>
            <div className="d-flex justify-content-between mb-4">
                <h2>Listado de Miembros</h2>
                <button className="btn btn-primary ms-3" onClick={openModal}>
                    Agregar Miembro
                </button>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar miembros..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Tabla de miembros */}
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {miembros
                    .filter(m => m.nombreCompleto.toLowerCase().includes(searchText.toLowerCase()) || m.email.toLowerCase().includes(searchText.toLowerCase()))
                    .map(m => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.nombreCompleto}</td>
                            <td>{m.email}</td>
                            <td>{m.rol}</td>
                            <td>{new Date().toLocaleString()}</td> {/* Simulando fecha de registro */}
                            <td>
                                <button className="btn btn-link text-info" onClick={() => handleEdit(m)}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-link text-danger" onClick={() => handleDelete(m.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para el formulario de agregar o editar miembro */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar o Editar Miembro"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{isEditing ? 'Editar Miembro' : 'Agregar Miembro'}</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombreCompleto" className="form-label">Nombre Completo:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombreCompleto"
                                    name="nombreCompleto"
                                    value={miembro.nombreCompleto}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={miembro.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={miembro.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rol" className="form-label">Rol:</label>
                                <select
                                    className="form-select"
                                    id="rol"
                                    name="rol"
                                    value={miembro.rol}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="usuario">Usuario</option>
                                    <option value="admin">Admin</option>
                                </select>
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

export default Miembros;
