import axios from 'axios';

export const authenticateUser = async (email, password) => {
const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

    return response.data;
};

export const registerUser = async (userData) => {
const response = await axios.post('http://localhost:5000/api/auth/register', userData);

    return response.data;
};
