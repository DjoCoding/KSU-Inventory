import cn from "../../../utils/cn";
import Header from "../Header/Header";
import Items from "./Items/Items";

interface ItemsContentProps {
    onSideBarButtonClick: () => void;
}

export default function ItemsContent({ onSideBarButtonClick: handleClick }: ItemsContentProps) {
    return(
        <div
            className={cn(
                "max-sm:overflow-hidden flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header onSideBarButtonClick={handleClick}/>
            <Items />
        </div>
    )
}