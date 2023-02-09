import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import nprogress from "nprogress";

const server: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000
})

server.interceptors.request.use((config: InternalAxiosRequestConfig)=>{
    nprogress.start()
    return config
})

server.interceptors.response.use((response: AxiosResponse)=>{
    nprogress.done()
    return response
})

export default server