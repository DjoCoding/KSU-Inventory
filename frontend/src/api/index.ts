import axios from "axios"
import { LoginUserData } from "../types/data/auth/login-user.data";
import { CreateItemData } from "../types/data/items/create-item.data";
import { CreateWorkshopData } from "../types/data/workshops/create-workshop.data";

export interface ApiResponse {
    status: string;
    data?: any;
    message?: string;
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export async function loginUser(loginUserDto: LoginUserData) {
    return api.post<ApiResponse>("/auth/login", loginUserDto);
}

export const createItem = async (createItemDto: CreateItemData) => {
    const formData = createItemDto.data;
    return api.post("/items", formData);
}

export const createWorkshop = async (createWorkshopDto: CreateWorkshopData) => {
    return api.post("/workshops", createWorkshopDto);
}

export default api;

