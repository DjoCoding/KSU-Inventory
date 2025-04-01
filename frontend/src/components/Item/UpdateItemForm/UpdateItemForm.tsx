import React, { useState } from "react";

import { UpdateItemPrevData, UpdateItemState, UpdateItemValidationError } from "../../../types/data/items/update-item.data";
import { CreateItemValidationSchema } from "../../../validation/items/create-item.validation";

import Text from "../../shared/Form/Inputs/Text/Text";
import TextArea from "../../shared/Form/Inputs/TextArea/TextArea";
import Form from "../../shared/Form/Form";
import Picture from "../../shared/Picture/Picture";
import File from "../../shared/Form/Inputs/File/File";

interface UpdateItemFormProps {
    onClose: () => void;
    isOpened: boolean;
    prevFormData: UpdateItemPrevData;
    lockedFields: string[];
}

export default function UpdateItemForm({ isOpened, onClose: handleClose, prevFormData, lockedFields }: UpdateItemFormProps) {
    const [formData, setFormData] = useState<UpdateItemState>({
        ...prevFormData
    });
    const setTextField = (field: string, v: string) => setFormData((prev) => ({ ...prev, [field]: v }));

    const [validationErrors, setValidationErrors] = useState<UpdateItemValidationError>({
        name: "",
        location: "",
        workshop: "",
        description: "",
        pictures: ""
    });
    const setValidationError = (field: string, err: string) => setValidationErrors((prev) => ({ ...prev, [field]: err }));
    const clearValidationError = (field: string) => setValidationError(field, "");
    const clearValidationErrors = () => setValidationErrors({
        name: "",
        location: "",
        workshop: "",
        description: "",
        pictures: ""
    });

    const handleFileUpload = (files: FileList | null) => {
        if(!files) return;
        
        const filesToInsert: File[] = [];

        let n = formData.pictures.length;
        
        for(const file of files) {
            if(n >= 5) {
                setValidationError("pictures", "Max number of pictures reached");
                break;
            }

            const isfound = formData.pictures.find((pic) => !(pic instanceof String) && (pic as File).name == file.name);
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
        clearValidationError(name);
        if(name === "pictures") return handleFileUpload((e as React.ChangeEvent<HTMLInputElement>).target.files);
        return setTextField(name, e.target.value);
    }
    
    const submit = async (formData: UpdateItemState) => {
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
            return setValidationError("pictures", "At least one single picture is required");
        }

        const data = new FormData();
        
        data.append("name", formData.name);
        data.append("location", formData.location);
        data.append("description", formData.description);
        data.append("workshop", formData.workshop);

        for(const pic of formData.pictures) {
            data.append("files", pic);
        }

        return;
        // return await updateItem({ data });
    };

    const handleFormClose = () => {
        clearValidationErrors();
        setFormData({
            ...prevFormData,
            pictures: []
        });
        return handleClose();
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