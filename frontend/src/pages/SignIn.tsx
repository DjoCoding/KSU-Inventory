import logo from "../../assets/ksu.knife.logo.png"

export default function SignIn() {
    return(
        <div className="bg-primary absolute inset-0 flex items-center justify-center">
            <div className="rounded-xl py-8 px-10 flex flex-col bg-white">
                <div className="flex flex-col gap-3 items-center">
                    <img src={logo} alt="KSU Logo" className="w-[50px]" />
                    <p className="text-black text-lg font-medium">Sign in to your account</p>
                </div>
                <form className="flex flex-col border-2 border-black/10 rounded-2xl mt-10">
                    <input type="text"     className="px-3 py-4 text-lg text-black/70 outline-none border-b-2 border-b-black/10" placeholder="Username"/>
                    <input type="password" className="px-3 py-4 text-lg text-black/70 outline-none" placeholder="Password"/>
                </form>
                <input type="button" className="mt-5 py-2 px-2 rounded-xl hover:scale-101 focus:scale-99 duration-300 transition-all cursor-pointer  w-full bg-primary text-white font-medium" value="Sign In" />
            </div>
        </div>
    )
}