import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: `http://localhost:4000/api`,
  responseType: 'json',
});

export default axiosApiInstance
