import { Link } from "react-router-dom";

export default function Links() {
    return(
        <div className="flex gap-3">
            <button className="cursor-pointer hover:scale-105 focus:scale-95 duration-300 transition text-xl capitalize text-white bg-[#1588ba] px-4 py-2 rounded font-medium">
                <Link to="/signin">
                    sign in
                </Link>
            </button>
        </div>
    )
}