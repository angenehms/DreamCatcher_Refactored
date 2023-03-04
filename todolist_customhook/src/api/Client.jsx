import axios from "axios"
import { BASE_URL } from "./Constant";

export const axiosAPI = axios.create({
    baseURL : BASE_URL,
    headers : { "Content-Type" : "application/json" }
})

export const axiosAuthAPI = axios.create({
    baseURL : BASE_URL,
    headers : { "Content-Type" : "application/json" }
})

axiosAuthAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        console.log("타겟", error);
        return Promise.reject(error);
    }
)
