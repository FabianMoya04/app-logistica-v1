// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Link to="/productos" className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="card-title">Total Productos</div>
                            <div>6</div>
                        </div>
                        <div className="card-footer">
                            <span>Más Info</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Link to="/categorias" className="card text-white bg-info o-hidden h-100">
                        <div className="card-body">
                            <div className="card-title">Total Categorías</div>
                            <div>8</div>
                        </div>
                        <div className="card-footer">
                            <span>Más Info</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Link to="/almacen" className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="card-title">Total Almacenes</div>
                            <div>2</div>
                        </div>
                        <div className="card-footer">
                            <span>Más Info</span>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Link to="/pedidos" className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="card-title">Total Ventas</div>
                            <div>8225.77</div>
                        </div>
                        <div className="card-footer">
                            <span>Más Info</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
