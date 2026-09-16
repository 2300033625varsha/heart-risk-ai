import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const predictHeartRisk = async (features) => {
  try {
    const response = await apiClient.post('/predict', { features });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Server error occurred');
    } else if (error.request) {
      throw new Error('No response from server. Ensure the Flask backend is running.');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

export default apiClient;
