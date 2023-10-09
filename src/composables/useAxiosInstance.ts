import axios from 'axios'

const requestAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
})

export default requestAxios
