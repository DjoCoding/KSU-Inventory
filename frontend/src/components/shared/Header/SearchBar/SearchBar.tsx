export default function SearchBar() {
    return(
        <div className="flex items-center justify-center gap-4">
            <label htmlFor="search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-black/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </label>
            <input type="text" name="search" className="w-[40vw] max-w-[600px] bg-white border border-black/10 text-black/90 text-[18px] px-4 py-2 rounded-xl outline-none" />
        </div>
    )
}