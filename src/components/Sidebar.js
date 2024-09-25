// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Para la navegación entre vistas
import { FaTachometerAlt, FaBox, FaTags, FaWarehouse, FaReceipt, FaUsers, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading text-white">Inventario</div>
            <div className="list-group list-group-flush">
                <Link to="/dashboard" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaTachometerAlt /> Dashboard
                </Link>
                <Link to="/productos" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaBox /> Productos
                </Link>
                <Link to="/categorias" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaTags /> Categorías
                </Link>
                <Link to="/almacen" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaWarehouse /> Almacén
                </Link>
                <Link to="/pedidos" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaReceipt /> Pedidos
                </Link>
                <Link to="/miembros" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaUsers /> Miembros
                </Link>
                <Link to="/logout" className="list-group-item list-group-item-action bg-dark text-white">
                    <FaSignOutAlt /> Cerrar sesión
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
