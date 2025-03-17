import { JSX } from "react";
import cn from "../../../../../utils/cn";

interface NavItemProps {
    icon: JSX.Element;
    value: string;
    iconOnly: boolean;
    isActive: boolean;
    onClick: () => void;
}

export default function NavItem({ isActive, onClick: handleClick, icon, value, iconOnly }: NavItemProps) {
    return(
        <button 
            onClick={handleClick} 
            className={cn(
                "w-full px-4 py-2 flex hover:bg-hover-dark duration-100 cursor-pointer",
                isActive ? "bg-hover-dark" : "bg-transparent"
            )}    
        >
            <div className="flex justify-center items-center gap-2">
                <>
                    { icon }
                </>
                {
                    iconOnly
                    &&
                    <p className="capitalize text-white text-xl font-medium">
                        { value }
                    </p>
                }
            </div>
        </button>
    )
}