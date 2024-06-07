import axios from "axios";

const api = axios.create({
    baseURL: 'https://pi-sem4.onrender.com/'

})

export default api