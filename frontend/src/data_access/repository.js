import axios from 'axios';

const baseURL = window.location.origin + "/api";

export default axios.create({
    baseURL
});