import cn from "../../../utils/cn";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Account from "./Account/Account";
import { useAuth } from "../../../hooks/auth/useAuth";
import { IUser } from "../../../types/user";


interface SideBarProps {
    toggle: () => void;
    isOpened: boolean;
    subPage: string;
    onSubPageButtonClick: (subPage: string) => void;
}

export default function SideBar({ onSubPageButtonClick: handleSubPageButtonClick, subPage, toggle, isOpened }: SideBarProps) {
    const user = useAuth().user as IUser;
    
    return(
        <div
            className={cn(
                "z-999 max-sm:absolute relative top-0 left-0 bottom-0 bg-primary py-4 transition-all ease-in-out duration-300",
                isOpened ? "max-sm:w-[100vw] max-sm:-translate-x-[0]" : "max-sm:-translate-x-[100%]"
            )}
        >
            <Header isOpened={isOpened} handleButtonClick={toggle} />
            <Nav onButtonClick={handleSubPageButtonClick} subPage={subPage} isOpened={isOpened} />
            <Account iconOnly={!isOpened} user={user} />
        </div>
    )
}