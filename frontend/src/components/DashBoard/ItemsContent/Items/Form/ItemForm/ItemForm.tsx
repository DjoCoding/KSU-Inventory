export default function ItemForm() {
    return(
        <form className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="name" className="capitalize font-medium">name <span className="text-red-500">*</span></label>
                <input name="name" type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="location" className="capitalize font-medium">location <span className="text-red-500">*</span></label>
                <input name="location" type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="pictures" className="capitalize font-medium">pictures</label>
                <label>
                    <input name="pictures" type="file" accept="image" className="hidden"></input>
                    <div className="flex items-center justify-center size-[100px] bg-black/10 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </label>
            </div>
            <div className="flex flex-col mb-10">
                <label htmlFor="description" className="capitalize font-medium">description</label>
                <textarea name="description" className="h-[200px] bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
            </div>
        </form>
    )
}