import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import SideBar from "../components/shared/SideBar/SideBar"

export default function Layout() {
    const navigate = useNavigate();
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const toggle = () => setIsOpened((prev) => !prev);

    const [subPage, setSubPage] = useState<string>("items");
    const handleSubPageButtonClick = (subPage: string) => { 
        setIsOpened(false);
        setSubPage(subPage); 
        return navigate(`/dashboard`);        
     };

    return(
        <div className="overflow-y-hidden w-full min-h-lvh flex flex-row">
            <SideBar onSubPageButtonClick={handleSubPageButtonClick} toggle={toggle} isOpened={isOpened} subPage={subPage} />
            <Outlet context={{ subPage , toggle }}/>
        </div>
    )
}

export interface LayoutContextType {
    subPage: string;
    toggle: () => void;
}
