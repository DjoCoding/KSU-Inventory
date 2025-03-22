import { IItem } from "../../types/item";
import { IUser } from "../../types/user";
import { IWorkShop } from "../../types/workshop";

import Header from "../shared/Header/Header";
import WorkshopContent from "./WorkshopContent/WorkshopContent";

interface WorkshopProps {
    user: IUser;
    workshop: IWorkShop;
    items: IItem[];
    toggle: () => void;
}

export function Workshop({ toggle, workshop, items, user }: WorkshopProps) {
    return(
        <div className="max-sm:overflow-hidden flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6" >    
            <Header onSideBarButtonClick={toggle}/>        
            <WorkshopContent items={items} user={user} workshop={workshop} />
        </div>
    )
}