import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
});

export const getProductos = async () => {
    try {
        const response = await api.get('/productos');
        return response.data;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
};

export const getProductoById = async (id_producto) => {
    try {
        const response = await api.get(`/productos/${id_producto}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching producto by id:', error);
        throw error;
    }
};

export const createProducto = async (producto) => {
    try {
        const response = await api.post('/productos', producto);
        return response.data;
    } catch (error) {
        console.error('Error creating producto:', error);
        throw error;
    }
};

export const deleteProducto = async (id_producto) => {
    try {
        await api.delete(`/productos/${id_producto}`);
    } catch (error) {
        console.error('Error deleting producto by id:', error);
        throw error;
    }
};


export default apiProductos;