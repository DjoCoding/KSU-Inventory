import { useState } from "react";
import { items } from "../../../../data";

import Form from "./Form/Form";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";

export default function Items() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const closeForm = () => setIsOpened(false);
    const openForm = () => setIsOpened(true);


    return(
        <div className="flex flex-col gap-10 px-4">
            <Header openForm={openForm} />
            <MainSection items={items}  />
            <Form isOpened={isOpened} onClose={closeForm} />
        </div>
    )
}