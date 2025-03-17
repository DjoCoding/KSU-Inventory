import { DASHBOARD_NAV_ITEMS } from "../../../../constants/index"
import NavItem from "./NavItem/NavItem"

interface NavProps {
    isOpened: boolean;
    subPage: string;
    setSubPage: (v: string) => void;
}

export default function Nav({ subPage, setSubPage, isOpened }: NavProps) {
    return(
        <div className="flex flex-col justify-center mt-10">
            <ul className="space-y-3">
                {
                    DASHBOARD_NAV_ITEMS
                    .map(({ icon, value }) => <NavItem onClick={() => setSubPage(value)} isActive={subPage === value} iconOnly={isOpened} icon={icon} value={value} />)
                }
            </ul>
        </div>
    )
}