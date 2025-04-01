import { useParams } from "react-router-dom"
import useItemStore from "../hooks/items/useItemStore";
import { useEffect, useState } from "react";

import { IWorkShop } from "../types/workshop";

import toast from "react-hot-toast";
import Loading from "../components/Loading/Loading";
import { Item as ItemComponent } from "../components/Item/Item"
import UpdateItemForm from "../components/Item/UpdateItemForm/UpdateItemForm";

export default function Item() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const closeForm = () => setIsOpened(false);
    const openForm = () => setIsOpened(true);

    const { id } = useParams();
    const { 
        selectedItem,
        loading, 
        error, 
        getItem
    } = useItemStore();

    useEffect(() => {
        getItem(id as string);
    }, []);

    useEffect(() => {
        if(!error) return;
        toast.error("Failed to fetch item data");
    }, [error]);

    if(!selectedItem || loading) {
        return <Loading />
    }
        
    return(
        <div className="relative grow">
            <ItemComponent item={selectedItem} openForm={openForm} />
            <UpdateItemForm 
                isOpened={isOpened}
                lockedFields={["workshop"]}
                onClose={closeForm}
                prevFormData={{
                    name: selectedItem.name,
                    description: selectedItem.description,
                    location: selectedItem.location,
                    pictures: selectedItem.pictures,
                    workshop: (selectedItem.workshop as IWorkShop).name
                }}
            />
        </div>
    )
}