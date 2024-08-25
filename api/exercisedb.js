import axios from "axios";
import { bodyParts, rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com"

const apiCall = async (url, params) => { 
    try {
        const options = {
            method: "GET",
            url,
            headers: {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            },
            params,
        }
        const response = await axios(options);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export const fetchExercisesByBodyPart = async (bodyParts) => { 
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyParts}`)
    return data;
}