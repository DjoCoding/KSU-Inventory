import React, { useEffect, useState } from "react";
import useItemStore from "../../../../../hooks/items/useItemStore";

import { CreateItemState, CreateItemValidationError } from "../../../../../types/data/items/create-item.data";
import { CreateItemValidationSchema } from "../../../../../validation/items/create-item.validation";
import useBroadcaster from "../../../../../hooks/broadcaster/useBroadcaster";

import cn from "../../../../../utils/cn";

import Header from "./Header/Header";
import ItemForm from "./ItemForm/ItemForm";
import toast from "react-hot-toast";
import Loading from "../../../../Loading/Loading";

interface FormProps {
    isOpened: boolean;
    onClose: () => void;
}

export default function Form({ isOpened, onClose: handleClose  }: FormProps) {
    const [formData, setFormData] = useState<CreateItemState>({
        name: "",
        location: "",
        description: "",
        pictures: [],
        workshop: ""
    });

    const [validationErrors, setValidationErrors] = useState<CreateItemValidationError>({
        name: "",
        location: "",
        description: "",
        pictures: "",
        workshop: ""
    })
    const setError = (field: string, err: string) => setValidationErrors((prev) => ({ ...prev, [field]: err }));

    const notifySuccess = useBroadcaster("create-item-success", (message) => {
        toast.success(message);
    });
    const notifyError = useBroadcaster("create-item-error", (message) => {
        toast.error(message);
    });
    

    const { createItem, loading, error, selectedItem } = useItemStore();

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = (e as React.ChangeEvent<HTMLInputElement>).target.files;
        if(!files) return;
        
        const filesToInsert: File[] = [];

        let n = formData.pictures.length;
        
        for(const file of files) {
            if(n >= 5) {
                setError("pictures", "Max number of pictures reached");
                break;
            }

            const isfound = formData.pictures.find((pic) => pic.name == file.name);
            if(isfound) continue;
            
            filesToInsert.push(file);
            n++
        }

        setFormData((prev) => ({
            ...prev,
            pictures: [ ...prev.pictures, ...filesToInsert]
        }));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setError(name, "");
        
        if(name == "pictures") return handleFileUpload(e as React.ChangeEvent<HTMLInputElement>);

        const value = e.target.value;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFormClose = () => {
        // first reset all the state
        setFormData({
            name: "",
            location: "",
            description: "",
            pictures: [],
            workshop: ""
        });

        setValidationErrors({
            name: "",
            location: "",
            description: "",
            pictures: "",
            workshop: ""
        })

        return handleClose();
    }

    const submit = async (formData: CreateItemState) => {
        const validationResult = CreateItemValidationSchema.safeParse(formData);
        const { success, error } = validationResult;
        if(!success) {
            if(!error) { return; }

            const e = error.format();
            return setValidationErrors({
                name: e.name?._errors[0] || "",
                location: e.location?._errors[0] || "",
                description: e.description?._errors[0] || "",
                pictures: e.pictures?._errors[0] || "",
                workshop: e.workshop?._errors[0] || ""
            });
        }

        if(formData.pictures.length < 1) {
            return setError("pictures", "At least one single picture is required");
        }

        const data = new FormData();
        
        data.append("name", formData.name);
        data.append("location", formData.location);
        data.append("description", formData.description);
        data.append("workshop", formData.workshop);

        for(const pic of formData.pictures) {
            data.append("files", pic);
        }

        return await createItem({ data });
    }

    useEffect(() => {
        if(selectedItem) {
            return notifySuccess("Item created succesfully");
        }

        if(error) {
            return notifyError("Failed to create item");
        }
    }, [selectedItem, error]);

    if(loading) {
        return <Loading />
    }

    return(
        <>
            {
                isOpened
                &&
                <div className="z-10 absolute bg-black/40 inset-0" />
            }
            <div
                className={cn(
                    "bg-white z-11 absolute left-[50%] translate-x-[-50%] bottom-0 w-[700px] py-2 px-4 border border-black/30 rounded-xl flex flex-col gap-4 duration-600 transition-all",
                    isOpened ? "translate-y-[-30%]" : "translate-y-[100%]"
                )}
            >
                <Header handleSubmit={() => submit(formData)} handleClose={handleFormClose} />
                <ItemForm errors={validationErrors} formData={formData} onChange={handleChange} />
            </div>
        </>
    )
}
