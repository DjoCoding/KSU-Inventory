import { useAuth } from "../hooks/auth/useAuth";

import Header from "../components/Account/Header/Header";
import Main from "../components/Account/Main/Main";

import { IUser } from "../types/user";

export default function Account() {
    const user = useAuth().user as IUser;
    
    return(
        <div className="bg-[#eee] h-screen flex flex-col">
            <Header />
            <Main user={user} />
        </div>
    )
}