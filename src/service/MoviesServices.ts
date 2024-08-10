import axios from "axios"

// const baseURL = import.meta.env.BASE_URL;
const base = 'http://localhost:4000/api/movies'

export const getAllMovies = async()=> {

    try {
        const response = await axios.get(base, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (response.status === 200) {
            return response.data
        }
        
    } catch (error) {
        console.log(error);
    }
    
}