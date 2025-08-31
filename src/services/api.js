import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// --- Mock Authentication ---
// In a real app, this would be a POST request to /login with email/password
// For this example, we'll just fetch a user by email (using username field)
export const login = (email) => {
  // JSONPlaceholder doesn't have emails in /users, so we'll pretend
  // The user with username 'Bret' will be our mock user
  if (email.toLowerCase() === 'user@example.com') {
    return API.get('/users/1');
  }
  return Promise.reject(new Error('User not found'));
};

// --- Data Fetching ---
export const getUsers = () => API.get('/users');
export const getUserDetails = (id) => API.get(`/users/${id}`);