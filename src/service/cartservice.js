import axios from 'axios'

const configObj = {
    headers: { Authorization : localStorage.getItem("token") }
}

export const CheckCart = (obj) =>{

    let response = axios.post(`http://localhost:3003/api/v1/cart`,obj,configObj)
    return response
    
}


export const AddToCart = (_id,obj) =>{
    let response = axios.post(`http://localhost:3003/api/v1/cart/add/${_id}`,obj,configObj)
    return response
}

export const AddToWishList = (_id,obj) =>{

    let response = axios.post(`http://localhost:3003/api/v1/wishlist/add/${_id}`,obj,configObj)
    return response

}

export const AddOrSub = (_id, obj) =>{

    let response = axios.put(`http://localhost:3003/api/v1/cart/increase/${_id}`,obj,configObj)
    return response

}


export const RemoveBook = (_id, obj) =>{

    let response = axios.put(`http://localhost:3003/api/v1/cart/remove/${_id}`,obj,configObj)
    return response

}


export const RegisterUser = (obj) => {
    let response = axios.put("http://localhost:3003/api/v1/userinfo/details",obj,configObj)
    return response

}


export const PurchaseBook = (_id, obj) =>{

    let response = axios.put(`http://localhost:3003/api/v1/cart/purchase/${_id}`,obj,configObj)
    return response

}



