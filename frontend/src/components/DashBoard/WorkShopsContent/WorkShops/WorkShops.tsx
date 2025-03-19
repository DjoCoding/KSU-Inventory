import { useEffect, useState } from "react";
import useWorkshopStore from "../../../../hooks/workshops/useWorkshopStore";

import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Form from "./Form/Form";
import Loading from "../../../Loading/Loading";

export default function WorkShops() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const openForm = () => setIsOpened(true);
    const closeForm = () => setIsOpened(false);

    const { workshops, getWorkshops, loading } = useWorkshopStore();

    useEffect(() => {
        getWorkshops();
    }, [getWorkshops]);

    if(loading) {
        return <Loading />
    }

    return(
        <div className="flex flex-col gap-10 px-2 py-2">
            <Header openForm={openForm}/>
            <MainSection workshops={workshops} />
            <Form onClose={closeForm} isOpened={isOpened} />
        </div>
    )
}