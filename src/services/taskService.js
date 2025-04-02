import axios from "axios";

const API_URL = 'http://localhost/api';
const token = localStorage.getItem('token');

export const createTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks`, taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getTaskById = async (id) => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${API_URL}/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};

export const getTasks = async () => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${API_URL}/tasks/search`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};
