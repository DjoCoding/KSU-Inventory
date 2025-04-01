import Picture from "./Picture/Picture";

import { IUser } from "../../../types/user";

interface MainProps {
    user: IUser;
}

export default function Main({ user }: MainProps) {
    return(
        <div className="grow flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4">
                <Picture pic={user.profile_pic} />
                <p className="text-center text-xl font-medium italic">
                    @{user.username}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
                <div className="max-lg:px-4 py-4 flex flex-row lg:flex-col gap-3 items-center justify-between lg:justify-center">
                    <p className="capitalize font-bold text-xl">role</p>
                    <p className="capitalize font-medium text-xl">{ user.role }</p>
                </div>
            </div>
        </div>
    )
}