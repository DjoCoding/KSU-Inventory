import { useState } from "react";
import useWorkshopStore from "../../../../hooks/workshops/useWorkshopStore"

import { CreateWorkshopState, CreateWorkshopValidationErrors } from "../../../../types/data/workshops/create-workshop.data";

import cn from "../../../../utils/cn";
import Form from "../../../shared/Form/Form";
import TextArea from "../../../shared/Form/Inputs/TextArea/TextArea";
import Text from "../../../shared/Form/Inputs/Text/Text";

interface WorkshopFormProps {
    isOpened: boolean;
    onClose: () => void;
}

export default function WorkshopForm({ isOpened, onClose: handleClose }: WorkshopFormProps) {
    const [formData, setFormData] = useState<CreateWorkshopState>({
        name: "",
        location: "",
        description: ""
    });
    const setFormDataField = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

    const [validationErrors, setValidationErrors] = useState<CreateWorkshopValidationErrors>({
        name: "",
        location: "",
        description: ""
    });
    const setValidationError = (field: string, value: string) => setValidationErrors((prev) => ({ ...prev, [field]: value }));
    const clearValidationError = (field: string) => setValidationError(field, "");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name: field, value } = e.target;
        clearValidationError(field);
        return setFormDataField(field, value);
    }

    const handleFormClose = () => {
        clearValidationError("name");
        clearValidationError("location");
        clearValidationError("description");
        return handleClose();
    }

    const handleSubmit = async() => {
        return handleClose();
    }

    return(
        <Form
            onClose={handleFormClose}
            isOpened={isOpened}
            onSubmit={handleSubmit}
        >
            <Text 
                value={formData.name}
                validationError={validationErrors.name}
                required={true}
                onChange={handleChange}
                field="name"
            />
            <Text 
                value={formData.location}
                validationError={validationErrors.location}
                required={true}
                onChange={handleChange}
                field="location"
            />
            <TextArea
                value={formData.description}
                validationError={validationErrors.description}
                onChange={handleChange}
                field="description"
                required={false}
            />
        </Form>
    )
}