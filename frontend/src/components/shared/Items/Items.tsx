import { useState } from "react";

import { IItem } from "../../../types/item";

import ItemForm from "../ItemForm/ItemForm";
import Header from "../../DashBoard/ItemsContent/Header/Header";
import ItemsGrid from "../ItemsGrid/ItemsGrid";


interface ItemsProps {
    items: IItem[];
}

export default function Items({ items }: ItemsProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const closeForm = () => setIsOpened(false);
    const openForm = () => setIsOpened(true);

    return(
        <div className="z-1 flex flex-col gap-10 px-4">
            <Header openForm={openForm} />
            <ItemsGrid items={items}  />
            <ItemForm 
                isOpened={isOpened} 
                onClose={closeForm}
            />
        </div>
    )
}