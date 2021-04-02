import axios from 'axios';
require('dotenv').config({ path: 'app-variables.env' });

const clienteAxios = axios.create({
    baseURL : 'http://ec2-34-230-47-145.compute-1.amazonaws.com:8080'
});

export default clienteAxios;