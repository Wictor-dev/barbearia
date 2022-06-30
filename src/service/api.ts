import axios from "axios";

export const api = axios.create({
    baseURL: 'https://barber-scheduling.herokuapp.com/api',    
})


