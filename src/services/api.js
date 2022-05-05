import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:5000'
});

export const makeSignUp = async (formData) => {
  return api.post("/sign-up",formData)
}