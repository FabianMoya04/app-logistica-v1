// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Productos from './Components/Productos';
import Categorias from './Components/Categorias';
import Almacen from './Components/Almacen';
import Pedidos from './Components/Pedidos';
import Miembros from './Components/Miembros';
import './App.css';

function App() {
    const [users, setUsers] = useState([]); // Estado para los usuarios

    useEffect(() => {
        // Función para obtener los usuarios
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/users');
                const data = await response.json();
                setUsers(data); // Guardar los usuarios en el estado
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsers(); // Llamar a la función al cargar el componente
    }, []);

    return (
        <div className="d-flex" id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard users={users} />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/almacen" element={<Almacen />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/miembros" element={<Miembros />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
