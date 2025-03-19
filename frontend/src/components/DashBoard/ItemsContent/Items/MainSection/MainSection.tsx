import { IItem } from "../../../../../types/item";
import Item from "../Item/Item";

interface MainSectionProps {
    items: IItem[];
}

export default function MainSection({ items }: MainSectionProps) {
    return(
        <div className="px-4 max-h-[78vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(300px,312px))] gap-x-4 gap-y-4">
            {
                items.map(item => <Item item={item} />)
            }
        </div>
   )
}