import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../types/user";
import cn from "../../../../utils/cn";

interface AccountProps {
    iconOnly: boolean;
    user: IUser;
}

export default function Account({ iconOnly, user }: AccountProps) {
    const navigate = useNavigate();

    const handleAccountClick = () => navigate("/account"); 

    return(
        <div onClick={handleAccountClick} className="cursor-pointer px-2 absolute left-0 bottom-4 w-full">
            <div 
                className={cn(
                    "bg-[#eee] px-2 py-2 flex items-center rounded-xl",
                    iconOnly ? "justify-center" : "gap-3 justify-between"
                )}
            >
                <div className="flex gap-1 items-center justify-center">
                    {
                        user.profile_pic === null
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        :
                        <img src={user.profile_pic} className="size-8 object-cover object-top rounded-[50%]"/>

                    }
                {
                    !iconOnly
                    &&
                    <div className="flex flex-col">
                        <p className="text-sm text-black/70">{ user.username }</p>
                        <p className="text-sm text-black/50">{ user.role }</p>
                    </div>
                }
                </div>
                {
                    !iconOnly
                    &&
                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}