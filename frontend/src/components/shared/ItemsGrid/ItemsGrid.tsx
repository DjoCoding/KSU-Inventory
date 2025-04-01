import { IItem } from "../../../types/item";
import Item from "../Items/Item/Item";

interface ItemsGridProps {
    items: IItem[];
}

export default function ItemsGrid({ items }: ItemsGridProps) {
    return(
        <>
            {
                items.length === 0
                ?
                <div className="grow flex items-center justify-center">
                    <h1 className="text-5xl text-black/60 font-bold capitalize">No items found</h1>    
                </div>
                :    
                <div className="scrollbar-hide px-4 max-h-[78vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(300px,312px))] gap-x-4 gap-y-4">
                    {
                        items.map(item => <Item key={item.id} item={item} />)
                    }
                </div>
            }
        </>
   )
}