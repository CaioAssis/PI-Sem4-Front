import axios from "axios";

const api = axios.create({
    //baseURL: 'https://pi-sem4.onrender.com/'
    baseURL: 'http://localhost:3000/'

})

export default api