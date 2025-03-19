import { IWorkShop } from "./workshop";

export interface IItem {
    id: string;
    name: string;
    description: string;
    pictures: string[];
    location: string;   
    workshop: IWorkShop | string;
}