import { apiClient } from "./config";

export const login = async (username, password) => {
    try {
        const response = await apiClient.post('/auth/log-in', { username, password });
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        return true;
    } catch (error) {
        return false;
    }
};
export const logout = async () => {
    try {
        const response = await apiClient.post('/auth/log-out', {});
        return true;
    } catch (error) {
        return false;
    }
};
export const registration = async ({name, email, phone, document, password }) => {
    try {
      const response = await apiClient.post('/customer', {name, email, phone, document, password});
      return response;
    } catch (error) {
      throw error;
    }
  };

export const confirmation = async ({username, confirmationCode}) => {
    try {
        const response = await apiClient.post('/auth/confirm-sign-up', {username, confirmationCode});
        return response;
    } catch (error) {
        throw error;
    }
};

export const resend = async (username) => {
    try {
        const response = await apiClient.post('/auth/resend-confirmation-code', {username});
        return response;
    } catch (error) {
        throw error;
    }
};





