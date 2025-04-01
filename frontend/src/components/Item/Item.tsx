import ImagesGrid from "./ImagesGrid/ImagesGrid";
import { IItem } from "../../types/item";
import ItemDetails from "./ItemDetails/ItemDetails";
import Header from "./Header/Header";

interface ItemProps {
    item: IItem;
    openForm: () => void;
}

export function Item({ item, openForm: handleClick }: ItemProps) {
    return(
        <div className="w-full max-w-[1000px] mx-auto p-4">
            <Header onButtonClick={handleClick} />
            <ImagesGrid images={item.pictures} />
            <ItemDetails item={item} />
        </div>
    )
}