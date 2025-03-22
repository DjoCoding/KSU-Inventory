import { ReactTyped } from "react-typed"
import { TYPING_EFFECTS_VALUES } from "../../../constants/index"

export default function Hero() {
    return(
        <div className="mx-auto container grow flex flex-col justify-evenly items-center">
            <div className="gap-10 xl:gap-3 flex-col xl:flex-row flex justify-between items-center max-w-[50%] w-full">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-[300px]"><path d="M19.838 5.455a1 1 0 00-.432-.369l-9-4a.999.999 0 00-.812 0l-9 4A1 1 0 000 6v14h2V6.65l8-3.556 8 3.556V20h2V6a1 1 0 00-.162-.545zM12 8h4v4h-4V8zm-2 2H4v10h6V10zm6 4h-4v6h4v-6z" fill="#1588ba"/>
                </svg>
                <div className="max-lg:flex-col flex items-center gap-10">
                    <h1 className="uppercase font-bold text-7xl text-primary"> ksu </h1>                   
                    <p className="capitalize text-gray-600 font-medium text-4xl">
                        <ReactTyped
                            strings={TYPING_EFFECTS_VALUES.strings}
                            typeSpeed={TYPING_EFFECTS_VALUES.typeSpeed}
                            backSpeed={TYPING_EFFECTS_VALUES.backSpeed}
                            loop
                        />
                    </p>
                </div>
            </div>
            <p className="text-3xl font-bold mt-10 text-black/80 text-center">Consult all the items, workshops inside the inventory.</p>
        </div>
    )
}