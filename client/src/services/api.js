import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend URL
  headers: { 
    'Content-Type': 'application/json'
  },
  withCredentials: true, // Include cookies for cross-origin requests if needed
});


apiClient.interceptors.request.use(
  (config) => {
    // Assumes you store the token in localStorage after admin login
    const token = localStorage.getItem('adminToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// General API calls
const get = (endpoint) => apiClient.get(endpoint);
const create = (endpoint, data) => apiClient.post(endpoint, data);
const update = (endpoint, data) => apiClient.put(endpoint, data);
const destroy = (endpoint) => apiClient.delete(endpoint);

export const authApi = {
    login: (credential) => apiClient.post('/auth/login',credential),
    register: (credential) => apiClient.post('/auth/register',credential),
    google: (credential) => apiClient.post('/auth/google',credential),
    getMe: () => apiClient.get('/auth/me'),
}

export default apiClient;