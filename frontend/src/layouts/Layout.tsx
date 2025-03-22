import { useState } from "react"

import { Outlet } from "react-router-dom"

import SideBar from "../components/DashBoard/SideBar/SideBar"

export default function Layout() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const toggle = () => setIsOpened((prev) => !prev);

    const [subPage, setSubPage] = useState<string>("items");
    const handleSubPageButtonClick = (subPage: string) => { setIsOpened(false); return setSubPage(subPage) };

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
