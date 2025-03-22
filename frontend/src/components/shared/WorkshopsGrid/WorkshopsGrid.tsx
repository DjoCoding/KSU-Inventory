import { IWorkShop } from "../../../types/workshop";
import WorkShop from "./WorkShop/WorkShop";

interface MainSectionProps {
    workshops: IWorkShop[];
}

export default function MainSection({ workshops }: MainSectionProps) {
    return(
        <div className="flex flex-col gap-3">
            {
                workshops.map(workshop => <WorkShop workshop={workshop}/>)
            }
        </div>
    )
}