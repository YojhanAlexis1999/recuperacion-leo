import axios from 'axios'

const ClienteAxios = axios.create({
    baseURL: "https://servidor-telecomunicaciones.herokuapp.com"
})

export default ClienteAxios