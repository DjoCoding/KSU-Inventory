import { useEffect, useState } from "react";
import SideBar from "../components/DashBoard/SideBar/SideBar";
import ItemsContent from "../components/DashBoard/ItemsContent/ItemsContent";
import WorkShopsContent from "../components/DashBoard/WorkShopsContent/WorkShopsContent";

export default function DashBoard() {
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const toggle = () => setIsOpened((prev) => !prev);
    
    const [subPage, setSubPage] = useState<string>("items");

    useEffect(() => {
        console.log(isOpened)
    }, [isOpened]);

    return(
        <div className="overflow-y-hidden w-full min-h-lvh flex flex-row">
            <SideBar setSubPage={setSubPage} subPage={subPage} isOpened={isOpened} toggle={toggle} />
            {
                subPage === "items"
                ?
                <ItemsContent onSideBarButtonClick={toggle} />
                :
                <WorkShopsContent onSideBarButtonClick={toggle} />
            }
        </div>
    )
}