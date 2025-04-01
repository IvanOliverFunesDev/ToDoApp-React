import axios from "axios";

const API_URL = 'http://localhost/api/register';

export const register = async (userData)=> {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
}