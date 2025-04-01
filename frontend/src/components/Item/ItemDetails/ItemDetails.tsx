import { IItem } from "../../../types/item";
import { IWorkShop } from "../../../types/workshop";

interface ItemDetailsProps {
    item: IItem;
}

export default function ItemDetails({ item }: ItemDetailsProps) {
    return(
        <div className="mt-5 flex flex-col gap-10">
            <p className="text-4xl fond-bold text-black/60">
                { item.name }
            </p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row flex-wrap md:items-center justify-center md:justify-between gap-4">
                    <div className="flex justify-between flex-row md:flex-col gap-0 md:gap-2">
                        <p className="capitalize text-lg font-medium text-black/70">name</p>
                        <p className="text-lg text-black/80">{ item.name }</p>
                    </div>
                    <div className="block border-b-2 border-b-black/20 md:hidden"></div>
                    <div className="flex justify-between flex-row md:flex-col gap-0 md:gap-2">
                        <p className="capitalize text-lg font-medium text-black/70">location</p>
                        <p className="text-lg text-black/80">{ item.location }</p>
                    </div>
                    <div className="block border-b-2 border-b-black/20 md:hidden"></div>
                    <div className="flex justify-between flex-row md:flex-col gap-0 md:gap-2">
                        <p className="capitalize text-lg font-medium text-black/70">workshop</p>
                        <p className="text-lg text-black/80">{ (item.workshop as IWorkShop).name }</p>
                    </div>
                    <div className="block border-b-2 border-b-black/20 md:hidden"></div>
                </div>
                <div className="flex flex-col">
                    <p className="capitalize text-lg font-medium text-black/70">description</p>
                    <p className="text-lg text-black/80">{ item.description }</p>
                </div>
            </div>
        </div>
    )
}