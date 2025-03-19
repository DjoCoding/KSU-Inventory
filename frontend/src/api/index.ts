import axios from "axios"
import { LoginUserData } from "../types/data/auth/login-user.data";
import { CreateItemData } from "../types/data/items/create-item.data";
import { CreateWorkshopData } from "../types/data/workshops/create-workshop.data";
import { LOCAL_STORAGE } from "../constants";

export interface ApiResponse {
    status: string;
    data?: any;
    message?: string;
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY);
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export async function loginUser(loginUserDto: LoginUserData) {
    return api.post<ApiResponse>("/auth/login", loginUserDto);
}

export const createItem = async (createItemDto: CreateItemData) => {
    const formData = createItemDto.data;
    return api.post<ApiResponse>("/items", formData);
}

export const createWorkshop = async (createWorkshopDto: CreateWorkshopData) => {
    return api.post<ApiResponse>("/workshops", createWorkshopDto);
}

export const getItems = async () => {
    return api.get<ApiResponse>("/items");
}

export const getWorkshops = async () => {
    return api.get<ApiResponse>("/workshops");    
}

export const getItem = async (id: string) => {
    return api.get<ApiResponse>(`/items/${id}`);
}

export const getWorkshop = async (id: string) => {
    return api.get<ApiResponse>(`/workshops/${id}`);
}

export default api;

