import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/auth/useAuth"

export default function LogoutButton() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleClick = async () => {
        logout();
        return navigate("/signin");
    }

    return(
        <button onClick={handleClick} type="button" className="bg-white px-2 py-1 cursor-pointer border border-black/10 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
        </button>
    )
}