import LogoutButton from "./LogoutButton/LogoutButton";
import SearchBar from "./SearchBar/SearchBar";
import SideBarButton from "./SideBarButton/SideBarButton";

interface HeaderProps {
    onSideBarButtonClick: () => void;
}

export default function Header({ onSideBarButtonClick: handleClick }: HeaderProps) {
    return(
        <div className="px-3 md:px-4 pt-3 pb-1 flex justify-between">
            <SideBarButton onClick={handleClick} />
            <SearchBar />
            <LogoutButton />
        </div>
    )
}