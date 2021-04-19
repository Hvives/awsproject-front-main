import axios from 'axios';
require('dotenv').config({ path: 'app-variables.env' });

const clienteAxios = axios.create({
    baseURL : 'ec2-18-234-108-166.compute-1.amazonaws.com:4000'
});

export default clienteAxios;