import React from 'react';
import ProductosComponent from './components/ProductosComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Aplicación de Logística</h1>
        <Routes>
          <Route path="/productos" element={<ProductosComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
