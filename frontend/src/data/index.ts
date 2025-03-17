import { IItem } from "../types/item";
import { IUser } from "../types/user";
import { IWorkShop } from "../types/workshop";

export const user: IUser = {
    id: "1",
    username: "djaoued06",
    role: "Admin"
}

export const item: IItem = {
    id: "1",
    name: "table",
    description: "a big table able to hold basically anything",
    pictures: [
        "https://as1.ftcdn.net/v2/jpg/03/24/55/76/1000_F_324557686_yIP0EDvln2zZbglmcakqmTxzdTE5t57h.jpg",
        "https://as1.ftcdn.net/v2/jpg/03/08/57/00/1000_F_308570068_XYo94iBAHQghEQKcEqainvg4KZdtrdHE.jpg",
        "https://as2.ftcdn.net/v2/jpg/04/39/38/07/1000_F_439380799_PFzKQoAjU5lzTHIPsbeB0PTGGYCKpnx5.jpg"
    ],
    location: "first floor, third section"
}

export const items: IItem[] = [
    item, 
    {
        ...item,
        pictures: [
            "https://as1.ftcdn.net/v2/jpg/03/08/57/00/1000_F_308570068_XYo94iBAHQghEQKcEqainvg4KZdtrdHE.jpg"
        ]
    }, 
    {
        ...item,
        pictures: [
            "https://as2.ftcdn.net/v2/jpg/04/39/38/07/1000_F_439380799_PFzKQoAjU5lzTHIPsbeB0PTGGYCKpnx5.jpg"
        ]
    }
]

export const workshop: IWorkShop = {
    id: "12332",
    name: "WorkShop 1",
    location: "Behind the main hall"
};

export const workshops: IWorkShop[] = [
    workshop, 
    workshop, 
    workshop,
    workshop
]