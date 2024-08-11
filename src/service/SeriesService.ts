import axios from "axios"

const base = import.meta.env.VITE_API_URL

export const getAllSeries = async()=> {

    try {
        const response = await axios.get(`${base}/series`)
    
        if (response.status === 200) {
            return response.data
        }
        
    } catch (error) {
        console.log(error);
    }
    
}