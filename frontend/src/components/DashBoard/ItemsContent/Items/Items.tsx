import { useEffect, useState } from "react";
import useItemStore from "../../../../hooks/items/useItemStore";

import Form from "./Form/Form";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Loading from "../../../Loading/Loading";

export default function Items() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const closeForm = () => setIsOpened(false);
    const openForm = () => setIsOpened(true);

    const { items, loading, getItems } = useItemStore();

    useEffect(() => {
        getItems();
    }, [getItems]);

    if(loading) {
        return <Loading />
    }

    return(
        <div className="z-1 flex flex-col gap-10 px-4">
            <Header openForm={openForm} />
            <MainSection items={items}  />
            <Form isOpened={isOpened} onClose={closeForm} />
        </div>
    )
}