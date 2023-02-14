import axios from "axios"
import { apiClient } from "./ApiClient"

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:9090/hello-world-bean')
// }



export const retrieveHelloWorldBeanV1 = () => axios.get('http://localhost:9090/hello-world-bean')

export const retrieveHelloWorldBeanV2 
    = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldBeanPathVariable = (username) => axios.get(`http://localhost:9090/hello-world/path-variable/${username}`)


// //Response to preflight request doesn't pass access control check => Authorization header
// export const retrieveHelloWorldPathVariable
//     = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`
//     // ,{
//     //     headers: {
//     //         Authorization: token
//     //     }
//     // }
//     )