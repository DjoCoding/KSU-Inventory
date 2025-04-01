import { useState } from "react";
import cn from "../../../utils/cn";

interface ImagesGridProps {
    images: string[];
}

export default function ImagesGrid({ images }: ImagesGridProps) {
    const [onShowAll, setOnShowAll] = useState<boolean>(false);
    
    return(
        <>
            {
                onShowAll
                &&
                <div className="absolute inset-0 bg-black/40 z-100">
                    <div className="flex items-center justify-end p-4">
                        <button onClick={() => setOnShowAll(false)} className="p-2 rounded-[50%] hover:bg-[#bbb] transition-all cursor-pointer duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                        {
                            images.map((image, index) => {
                                return(
                                    <div className={cn(
                                        "overflow-hidden rounded-lg",
                                        index % 2 === 0 ? "h-[400px]" : "h-[300px]"
                                    )}>
                                        <img src={image} className="object-cover object-center h-full"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            <div className="flex items-center justify-center w-full shadow-xl shadow-black/40 rounded-xl">
                {
                    images.length == 1
                    &&
                    <img src={images[0]} className="object-cover w-full max-h-full rounded-xl object-center" />
                }

                {
                    images.length == 2    
                    &&
                    <div className="flex gap-2 grow">
                        <div className="flex">
                            <img src={images[0]} className="rounded-l-xl object-cover w-full max-h-full object-center" />
                        </div>
                        <div className="flex">
                            <img src={images[1]} className="rounded-r-xl object-cover w-full max-h-full object-center" />
                        </div>
                    </div>
                }
                {
                    images.length > 2    
                    &&
                    <div className="relative grid grid-cols-2 gap-2 grow">
                        <div className="flex">
                            <img src={images[0]} className="rounded-l-xl object-cover object-center" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex flex-1"><img src={images[1]} className="rounded-tr-xl object-cover object-center" /></div>
                            <div className="flex flex-1"><img src={images[2]} className="rounded-br-xl object-cover object-center" /></div>
                        </div>
                        {
                            images.length >= 3
                            &&
                            <button onClick={() => setOnShowAll(true)} className="hover:scale-101 transition-all cursor-pointer shadow-lg shadow-black/70 outline-none border-black/40 bg-[#eee] absolute bottom-4 right-4 rounded-xl p-2 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>
                                <p className="text-black">
                                    Show more
                                </p>
                            </button>
                        }
                    </div>
                }
            </div>
        </>
    )
}