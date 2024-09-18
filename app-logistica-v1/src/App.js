// App.js
import React from 'react';
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
    return (

            <div className="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
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
