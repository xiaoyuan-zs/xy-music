import axios, {AxiosInstance} from 'axios'

const server: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000
})


export default server