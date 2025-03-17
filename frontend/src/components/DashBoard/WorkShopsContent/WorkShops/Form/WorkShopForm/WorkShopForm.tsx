export default function WorkShopForm() {
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
            <div className="flex flex-col mb-10">
                <label htmlFor="description" className="capitalize font-medium">description</label>
                <textarea name="description" className="h-[200px] bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
            </div>
        </form>
    )
}