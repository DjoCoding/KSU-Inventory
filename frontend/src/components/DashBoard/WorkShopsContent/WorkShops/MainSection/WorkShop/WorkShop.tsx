import { IWorkShop } from "../../../../../../types/workshop"

interface WorkShopProps {
    workshop: IWorkShop;
}

export default function WorkShop({ workshop }: WorkShopProps) {
    return(
        <div className="px-2 py-2 flex items-center justify-between w-full bg-white rounded-xl border border-black/20">
            <div className="flex flex-col gap-1">
                <p className="text-lg text-black/80 font-medium">{ workshop.name }</p>
                <p className="text-sm text-black/40 font-normal">{ workshop.location }</p>
            </div>
            <button className="px-2 py-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
        </div>
    )
}