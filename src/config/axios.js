import axios from 'axios';
require('dotenv').config({ path: 'app-variables.env' });

const clienteAxios = axios.create({
    baseURL : 'http://ec2-54-91-228-116.compute-1.amazonaws.com'
});

export default clienteAxios;