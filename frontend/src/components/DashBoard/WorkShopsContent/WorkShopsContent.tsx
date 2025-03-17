import cn from "../../../utils/cn";
import Header from "../Header/Header";
import WorkShops from "./WorkShops/WorkShops";

export default function WorkShopsContent() {
    return(
        <div
            className={cn(
                "flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header />
            <WorkShops />
        </div>
    )
}