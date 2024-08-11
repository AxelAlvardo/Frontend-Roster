import axios from "axios";
import { MediaType } from "../types";

const base = import.meta.env.VITE_API_URL

export const getCharacters = async(id: MediaType['_id'], media: string)=> {
    try {
        const response = await axios.get(`${base}/${media}/${id}`, {
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