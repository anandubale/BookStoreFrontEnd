import axios from 'axios'

const configObj = {
    headers: { Authorization : localStorage.getItem("token") }
}

export const getBooks = () => {
    let response = axios.get("http://localhost:3003/api/v1/books",configObj)
    return response
}



