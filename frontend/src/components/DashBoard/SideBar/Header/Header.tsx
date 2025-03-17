import cn from "../../../../utils/cn";
import Logo from "../Logo/Logo";

interface HeaderProps {
    handleButtonClick: () => void;
    isOpened: boolean;
}

export default function Header({ isOpened, handleButtonClick }: HeaderProps) {
    return(
        <div 
            className={cn(
                "flex px-4",
                isOpened ? "justify-between gap-6" : "justify-center"
            )}
        >
            <Logo isVisible={isOpened} />
            <button onClick={handleButtonClick} className="text-white hover:scale-115 focus:scale-90 duration-300 cursor-pointer transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    )
}