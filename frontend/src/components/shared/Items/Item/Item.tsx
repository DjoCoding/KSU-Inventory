import { useNavigate } from "react-router-dom";

import { IItem } from "../../../../types/item";

interface ItemProps {
    item: IItem
}

export default function Item({ item }: ItemProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        return navigate(`/items/${item.id}`);
    }

    return(
        <div onClick={handleClick} className="hover:scale-101 focus:scale-99 duration-300 transition-all cursor-pointer flex flex-col gap-2 rounded-2xl border-2 border-black/10 bg-white">
            {
                item.pictures.length === 0
                ?
                <div>
                    <div className="flex items-center justify-center rounded-2xl border-none bg-white w-full h-[300px]">
                        <p className="capitalize font-bold text-black/80">no picture</p>
                    </div>
                    <div className="border-b-black/20 border-b-2"/>
                </div>
                :  
                <div>  
                    <div className="rounded-2xl border-none h-[300px]">
                        <img src={item.pictures[0]} alt="Item picture" className="bg-no-repeat w-full object-fit h-full object-center rounded-t-2xl border-none" />
                    </div>
                    <div className="border-b-black/20 border-b-2"/>
                </div>
            }
            
            <div className="flex flex-col px-2 pb-2">
                <p className="text-xl text-black font-medium capitalize">{ item.name }</p>
                <p className="text-sl text-black/60 font-medium">{ item.location }</p>
            </div>
        </div>
    )
}