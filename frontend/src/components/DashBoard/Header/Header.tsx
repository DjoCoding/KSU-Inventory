import LogoutButton from "./LogoutButton/LogoutButton";
import SearchBar from "./SearchBar/SearchBar";
import SideBarButton from "./SideBarButton/SideBarButton";

interface HeaderProps {
    onSideBarButtonClick: () => void;
}

export default function Header({ onSideBarButtonClick: handleClick }: HeaderProps) {
    return(
        <div className="px-1 md:px-4 py-1 md:py-2 flex justify-between">
            <SideBarButton onClick={handleClick} />
            <SearchBar />
            <LogoutButton />
        </div>
    )
}