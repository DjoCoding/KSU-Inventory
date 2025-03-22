import { user } from "../../../../data";
import { IUser } from "../../../../types/user";

interface HeaderProps {
    user: IUser;
    name: string;
    openForm: () => void;
}

export default function Header({ openForm, user, name }: HeaderProps) {
    return(
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
            <div className="items-center flex flex-col md:flex-row gap-2 md:gap-1 capitalize font-bold text-5xl text-black/60 grow max-md:max-w-[600px] lg:max-w-[800px]">
                <p className="hidden md:block">workshops</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <p className="truncate">{ name }</p>
            </div>
            {
                user.role === "admin"
                &&
                <button onClick={openForm} className="w-full md:w-fit flex items-center justify-center gap-1 bg-primary px-2 py-2 rounded-xl cursor-pointer hover:scale-105 focus:scale-95 duration-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white text-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="capitalize font-medium text-white text-lg"> add workshop </p>
                </button>
            }
        </div>
    )
}