import axios from 'axios';

const loc = window.location;
const API_PORT = 8081;
const baseURL = `${loc.protocol}//${loc.hostname}:${API_PORT}/api`;

export default axios.create({
    baseURL
});