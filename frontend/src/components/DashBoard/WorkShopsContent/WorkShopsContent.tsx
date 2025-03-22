import { useEffect } from "react";
import useWorkshopStore from "../../../hooks/workshops/useWorkshopStore";
import cn from "../../../utils/cn";

import Header from "../../shared/Header/Header";
import Workshops from "./WorkShops/Workshops";
import Loading from "../../Loading/Loading";

interface WorkshopsContentProps {
    onSideBarButtonClick: () => void;
}

export default function WorkShopsContent({ onSideBarButtonClick: handleClick }: WorkshopsContentProps) {
    const { getWorkshops, workshops, loading, error }  = useWorkshopStore();

    useEffect(() => {
        getWorkshops();
    }, []);

    useEffect(() => {
        if(error) return console.log(error);
    }, [error]);

    if(loading) {
        return <Loading />
    }

    return(
        <div
            className={cn(
                "max-sm:overflow-hidden flex flex-col grow bg-gray-100 px-4 py-4 relative gap-6",
            )}
        >
            <Header onSideBarButtonClick={handleClick} />
            <Workshops workshops={workshops}/>
        </div>
    )
}