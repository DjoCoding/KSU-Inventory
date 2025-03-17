import Logo from "./Logo/Logo";
import Links from "./Links/Links";

export default function NavBar() {
    return(
        <div className="mx-auto container w-full border-b border-b-black/15 flex justify-between items-center py-4 px-2">
            <Logo />
            <Links />
        </div>
    )
}