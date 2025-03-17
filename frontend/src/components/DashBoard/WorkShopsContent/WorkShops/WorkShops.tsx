import { useState } from "react";

import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import { workshops } from "../../../../data";
import Form from "./Form/Form";

export default function WorkShops() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const openForm = () => setIsOpened(true);
    const closeForm = () => setIsOpened(false);

    return(
        <div className="flex flex-col gap-10 px-2 py-2">
            <Header openForm={openForm}/>
            <MainSection workshops={workshops} />
            <Form onClose={closeForm} isOpened={isOpened} />
        </div>
    )
}