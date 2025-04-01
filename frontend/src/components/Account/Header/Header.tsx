import { useNavigate } from "react-router-dom" 

import LogoutButton from "../../shared/Header/LogoutButton/LogoutButton"

export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => navigate("/dashboard")

    return(
        <div className="px-10 py-4 container mx-auto flex items-center justify-between">
            <button onClick={handleClick} className="cursor-pointer w-[50px]">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.838 5.455a1 1 0 00-.432-.369l-9-4a.999.999 0 00-.812 0l-9 4A1 1 0 000 6v14h2V6.65l8-3.556 8 3.556V20h2V6a1 1 0 00-.162-.545zM12 8h4v4h-4V8zm-2 2H4v10h6V10zm6 4h-4v6h4v-6z" fill="#1588ba"/></svg>           
            </button>
            <div>
                <LogoutButton />
            </div>
        </div>
    )
}