import axios from 'axios'


export const login = (loginObj) =>{
    const response = axios.post("http://localhost:3003/api/v1/users/login",loginObj)
    return response
}

export const SignUp = (RegisterObj) =>{
    const response = axios.post("http://localhost:3003/api/v1/users/register",RegisterObj)
    return response
}