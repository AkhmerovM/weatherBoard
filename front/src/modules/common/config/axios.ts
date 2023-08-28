import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});

export const POLL_CITIES_TIME_UPLOAD = 60000;
