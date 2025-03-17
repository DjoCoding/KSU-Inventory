import cn from "../../../utils/cn";
import Header from "../Header/Header";
import Items from "./Items/Items";

export default function ItemsContent() {
    return(
        <div
            className={cn(
                "flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header />
            <Items />
        </div>
    )
}