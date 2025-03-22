import { user } from "../../../../data";

interface HeaderProps {
    openForm: () => void;
}

export default function Header({ openForm }: HeaderProps) {
    return(
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
            <h1 className="capitalize font-bold text-5xl text-black/60">items</h1>
            {
                user.role === "admin"
                &&
                <button onClick={openForm} className="w-full md:w-fit flex items-center justify-center gap-1 bg-primary px-2 py-2 rounded-xl cursor-pointer hover:scale-105 focus:scale-95 duration-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white text-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="capitalize font-medium text-white text-lg"> add item </p>
                </button>
            }
        </div>
    )
}