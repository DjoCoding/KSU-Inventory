import logo from "../../../../assets/ksu.knife.logo.png"

interface HeaderProps {
    error: string;
}

export default function Header({ error }: HeaderProps) {
    return(
        <div className="flex flex-col gap-3 items-center">
            <img src={logo} alt="KSU Logo" className="w-[50px]" />
            <p className="text-black text-lg font-medium">Sign in to your account</p>
            {
                error != ""
                &&
                <p className="text-sm text-red-500 font-medium">{ error }</p>
            }
        </div>
    )
}