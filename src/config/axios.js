import axios from 'axios';
require('dotenv').config({ path: 'app-variables.env' });

const clienteAxios = axios.create({
    baseURL : 'https://ec2-52-91-28-194.compute-1.amazonaws.com:4000'
});

export default clienteAxios;