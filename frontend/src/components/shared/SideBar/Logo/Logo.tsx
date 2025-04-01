import logo from "../../../../../assets/ksu.logo.png"
import cn from "../../../../utils/cn";

interface LogoProps {
    isVisible: boolean;
}

export default function Logo({ isVisible }: LogoProps) {
    return(
        <div className="flex justify-between">
            <img src={logo} alt="KSU Logo" 
                className={cn(
                    "transition-all ease-in-out duration-300",
                    isVisible ? "w-[150px]" : "w-0" 
                )} 
            />
        </div>
    )
}