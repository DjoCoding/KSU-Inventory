import cn from "../../../utils/cn";
import Header from "../Header/Header";
import WorkShops from "./WorkShops/WorkShops";

interface WorkshopsContentProps {
    onSideBarButtonClick: () => void;
}

export default function WorkShopsContent({ onSideBarButtonClick: handleClick }: WorkshopsContentProps) {
    return(
        <div
            className={cn(
                "max-sm:overflow-hidden flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header onSideBarButtonClick={handleClick} />
            <WorkShops />
        </div>
    )
}