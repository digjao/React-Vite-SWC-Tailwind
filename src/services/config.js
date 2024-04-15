import axios from 'axios';

export const apiClient = axios.create({
  baseURL: "https://dev.customers.app.ainutri.com.br/v1",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
  },
  timeout: 30000
});