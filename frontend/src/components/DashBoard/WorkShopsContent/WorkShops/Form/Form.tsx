import cn from "../../../../../utils/cn";
import Header from "./Header/Header";
import WorkShopForm from "./WorkShopForm/WorkShopForm";

interface FormProps {
    isOpened: boolean;
    onClose: () => void;
}

export default function Form({ isOpened, onClose: handleClose  }: FormProps) {
    return(
        <div>
            {
                isOpened
                &&
                <div className="z-10 absolute bg-black/40 inset-0" />
            }
            <div
                className={cn(
                    "bg-white z-11 absolute left-[50%] translate-x-[-50%] bottom-0 w-[700px] py-2 px-4 border border-black/30 rounded-xl flex flex-col gap-4 duration-600 transition-all",
                    isOpened ? "-translate-y-[50%]" : "translate-y-[100%]"
                )}
            >
                <Header handleSubmit={() => {}} handleClose={handleClose} />
                <WorkShopForm />
            </div>
        </div>
        
    )
}