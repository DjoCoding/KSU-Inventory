import LogoutButton from "./LogoutButton/LogoutButton";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
    return(
        <div className="px-4 py-2 flex justify-between">
            <SearchBar />
            <LogoutButton />
        </div>
    )
}