import { useState } from "react";
import { IWorkShop } from "../../../../types/workshop";

import Header from "../Header/Header";
import WorkshopsGrid from "../../../shared/WorkshopsGrid/WorkshopsGrid";
import WorkshopForm from "../WorkshopForm/WorkshopForm";

interface WorkshopsProps {
    workshops: IWorkShop[];
}

export default function Workshops({ workshops }: WorkshopsProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const closeForm = () => setIsOpened(false);
    const openForm = () => setIsOpened(true);

    
    return(
        <div className="grow flex flex-col gap-10">
            <Header openForm={openForm}/>
            <WorkshopsGrid workshops={workshops} />
            <WorkshopForm isOpened={isOpened} onClose={closeForm} />
        </div>
    )
}