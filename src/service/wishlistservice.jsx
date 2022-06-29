import axios from 'axios'

const configObj = {
    headers: { Authorization : localStorage.getItem("token") }
}


export const CheckWishList = (obj) =>{
    const response = axios.post(`http://localhost:3003/api/v1/wishlist`,obj,configObj)
    return response
}