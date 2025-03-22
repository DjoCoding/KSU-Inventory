import { useEffect } from "react";

import useItemStore from "../../../hooks/items/useItemStore";

import cn from "../../../utils/cn";
import Header from "../../shared/Header/Header";
import Items from "../../shared/Items/Items";
import Loading from "../../Loading/Loading";

interface ItemsContentProps {
    onSideBarButtonClick: () => void;
}

export default function ItemsContent({ onSideBarButtonClick: handleClick }: ItemsContentProps) {
    const { items, loading, getItems } = useItemStore();

    useEffect(() => {
        getItems();
    }, [getItems]);

    if(loading) {
        return <Loading />
    }

    return(
        <div
            className={cn(
                "max-sm:overflow-hidden flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header onSideBarButtonClick={handleClick}/>
            <Items items={items} />
        </div>
    )
}