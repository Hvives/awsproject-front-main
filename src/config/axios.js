import axios from 'axios';
require('dotenv').config({ path: 'app-variables.env' });

const clienteAxios = axios.create({
    baseURL : 'http://ec2-18-234-108-166.compute-1.amazonaws.com'
});

export default clienteAxios;