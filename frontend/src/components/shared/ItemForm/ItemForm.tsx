import React, { useEffect, useState } from "react";
import useItemStore from "../../../hooks/items/useItemStore";
import useBroadcaster from "../../../hooks/broadcaster/useBroadcaster";


import { CreateItemState, CreateItemValidationError } from "../../../types/data/items/create-item.data"
import { CreateItemValidationSchema } from "../../../validation/items/create-item.validation";

import Loading from "../../Loading/Loading";
import Form from "../../shared/Form/Form";
import Text from "../../shared/Form/Inputs/Text/Text";
import TextArea from "../../shared/Form/Inputs/TextArea/TextArea";
import File from "../../shared/Form/Inputs/File/File";
import Picture from "../../shared/Picture/Picture";
import toast from "react-hot-toast";

interface ItemFormProps {
    isOpened: boolean;
    onClose: () => void;
    lockedFields?: string[];
    prevFormData?: CreateItemState;
}

export default function ItemForm({ isOpened, onClose: handleClose, prevFormData, lockedFields = [] }: ItemFormProps) {
    console.log(lockedFields);
    const [formData, setFormData] = useState<CreateItemState>(
        prevFormData 
        ?
        prevFormData 
        : {
        name: "",
        description: "",
        location: "",
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
        <Form
            isOpened={isOpened}
            onClose={handleFormClose}
            onSubmit={() => submit(formData)}
        >
            <Text 
                field="name"
                value={formData.name}
                onChange={handleChange}
                validationError={validationErrors.name}
                required={true}
                locked={lockedFields.includes("name")}
            />
            <Text
                field="location"
                value={formData.location}
                onChange={handleChange}
                validationError={validationErrors.location}
                required={true}
                locked={lockedFields.includes("location")}
            />
            <Text
                field="workshop"
                value={formData.workshop}
                onChange={handleChange}
                validationError={validationErrors.workshop}
                required={true}
                locked={lockedFields.includes("workshop")}
            />
            <File
                Component={Picture}
                field="pictures"
                onChange={handleChange}
                validationError={validationErrors.pictures}
                value={formData.pictures}
                required={true}
            />
            <TextArea 
                field="description"
                onChange={handleChange}
                validationError={validationErrors.description}
                value={formData.description}
                required={false}
                locked={lockedFields.includes("description")}
            />
        </Form>
    )
}
