import axios from "axios";
import {DataType, MediaType } from "../types";

const base = import.meta.env.VITE_API_URL

export const getCharacters = async (id: MediaType['_id'], media: string) => {
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


export const createCharacter = async(formdata: FormData) => {
    try {

        const response = await axios.post(`${base}/characters`, formdata);
        if (response.status === 200) {
            console.log('Personaje agregado:', response.data);
            console.log(response.data);
            return response.data
        }
    } catch (error) {
        console.log(error);
        console.error('Error al agregar personaje:', error);
    }
}