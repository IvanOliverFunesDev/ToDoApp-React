import axios from "axios";
import AppRouter from "../routes/AppRouter";

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

    return response.data.task;
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

export const updateTask = async (id, taskData) => {
    const token = localStorage.getItem('token');

    const response = await axios.put(`${API_URL}/tasks/${id}`, taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data
}

export const deleteTask = async (id) => {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`${API_URL}/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data
}
