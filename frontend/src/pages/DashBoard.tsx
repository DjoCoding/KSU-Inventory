import { useOutletContext } from "react-router-dom";
import { LayoutContextType } from "../layouts/Layout";

import ItemsContent from "../components/DashBoard/ItemsContent/ItemsContent";
import WorkShopsContent from "../components/DashBoard/WorkShopsContent/WorkShopsContent";


export default function DashBoard() {
    const { subPage, toggle } = useOutletContext<LayoutContextType>();
    return(
        <div className="overflow-y-hidden w-full min-h-lvh flex flex-row">
            { subPage === "items" ? <ItemsContent onSideBarButtonClick={toggle} /> : <WorkShopsContent onSideBarButtonClick={toggle} /> }
        </div>
    )
}