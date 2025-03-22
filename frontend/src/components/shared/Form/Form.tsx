import React, { ReactElement } from "react";
import cn from "../../../utils/cn";
import Header from "./Header/Header";

export interface FormInputProps<T = any, ValueT = any> {
    field: string;
    value: ValueT;
    onChange: (e: React.ChangeEvent<T>) => void;
    validationError: string;
    required: boolean;
    locked?: boolean;
}

interface FormProps {
    isOpened: boolean;
    onSubmit: () => Promise<void>;
    onClose: () => void;
    children: ReactElement<FormInputProps> | ReactElement<FormInputProps>[];
}

export default function Form({ 
    isOpened, 
    onSubmit: handleSubmit, 
    onClose: handleClose,
    children 
}: FormProps) {
    return(
        <>
            {
                isOpened
                &&
                <div className="z-10 absolute bg-black/40 inset-0" />
            }
            <div
                className={cn(
                    "scale-66 md:scale-100 bg-white z-11 absolute left-[50%] translate-x-[-50%] bottom-0 w-[700px] py-2 px-4 border border-black/30 rounded-xl flex flex-col gap-4 duration-600 transition-all",
                    isOpened ? "translate-y-[-30%]" : "translate-y-[100%]"
                )}
            >
                <Header onSubmit={handleSubmit} onClose={handleClose} />
                { children }               
            </div>
        </>
    )
}