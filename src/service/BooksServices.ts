import axios from "axios"

const base = import.meta.env.VITE_API_URL

export const getAllBooks = async()=> {

    try {
        const response = await axios.get(`${base}/books`)
        if (response.status === 200) {
            return response.data
        }
        
    } catch (error) {
        console.log(error);
    }
    
}