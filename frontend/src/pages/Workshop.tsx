import { useOutletContext } from "react-router-dom";
import { LayoutContextType } from "../layouts/Layout";

import { user, workshopWithItems } from "../data";

import { Workshop as WorkshopMainContent } from "../components/Workshop/Workshop";

export default function Workshop() {
    const { toggle } = useOutletContext<LayoutContextType>();
    
    return(
        <WorkshopMainContent toggle={toggle} user={user} workshop={workshopWithItems.workshop} items={workshopWithItems.items} />
    )
}