import cn from "../../../utils/cn";
import { user } from "../../../data/index"

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Account from "./Account/Account";


interface SideBarProps {
    toggle: () => void;
    isOpened: boolean;
    subPage: string;
    setSubPage: (v: string) => void;
}

export default function SideBar({ setSubPage, subPage, toggle, isOpened }: SideBarProps) {
    return(
        <div 
            className={cn(
                "relative bg-primary py-4 transition-all ease-in-out duration-300"
            )}
        >
            <Header isOpened={isOpened} handleButtonClick={toggle} />
            <Nav setSubPage={setSubPage} subPage={subPage} isOpened={isOpened} />
            <Account iconOnly={!isOpened} user={user} />
        </div>
    )
}