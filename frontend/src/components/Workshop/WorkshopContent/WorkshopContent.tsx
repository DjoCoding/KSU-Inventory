import { useState } from "react";

import { IWorkShop } from "../../../types/workshop";
import { IItem } from "../../../types/item";
import { IUser } from "../../../types/user";
import Header from "./Header/Header";
import ItemsGrid from "../../shared/ItemsGrid/ItemsGrid";
import ItemForm from "../../shared/CreateItemForm/CreateItemForm";

interface WorkshopContentProps {
    user: IUser;
    workshop: IWorkShop;
    items: IItem[];
}

export default function WorkshopContent({ workshop, items, user }: WorkshopContentProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const openForm = () => setIsOpened(true);
    const closeForm = () => setIsOpened(false);

    return(
        <div
            className="grow flex flex-col gap-10"
        >    
            <Header user={user} name={workshop.name} openForm={openForm} />        
            <ItemsGrid items={items} />
            <ItemForm
                prevFormData={{
                    name: "",
                    description: "",
                    location: "",
                    pictures: [],
                    workshop: workshop.name
                }}
                isOpened={isOpened} 
                onClose={closeForm}
                lockedFields={["workshop"]}
            />
        </div>
    )
}