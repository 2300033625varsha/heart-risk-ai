import axios from 'axios';

const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'https://heart-risk-ai-u1c3.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const predictHeartRisk = async (features) => {
  try {
    const response = await apiClient.post('/predict', { features });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.error || 'Server error occurred'
      );
    } else if (error.request) {
      throw new Error(
        'No response from server. Please try again.'
      );
    } else {
      throw new Error(
        error.message || 'An unexpected error occurred'
      );
    }
  }
};

export default apiClient;
