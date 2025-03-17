export default function SignIn() {
    return(
        <div className="flex items-center justify-center absolute inset-0 bg-[#1588ba] overflow-hidden">
            <form className="px-10 py-10 rounded bg-[rgb(238,238,238)] shadow-lg shadow-black/60 w-full max-w-[500px] flex flex-col item-center justify-center gap-12">
                <div className="flex flex-col w-full gap-4">
                    <h1 className="text-center uppercase text-7xl text-[#1588ba] font-medium">ksu</h1>
                    <h2 className="text-center capitalize text-6xl text-black/50 font-medium">sign in</h2>
                </div>
                <div className="py-10 flex flex-col gap-6">
                    <input type="text" className="border outline-none border-black/10 text-black/70 rounded px-4 py-4 text-2xl font-medium" placeholder="Username" />
                    <input type="password" className="border outline-none  border-black/10 text-black/70 rounded px-4 py-4 text-2xl font-medium" placeholder="Password" />
                </div>
                <button type="button" className="w-full bg-[#1588ba] capitalize text-white text-4xl py-4 rounded hover:scale-105 focus:scale-95 duration-300 cursor-pointer">sign in</button>
            </form>
        </div>
    )
}