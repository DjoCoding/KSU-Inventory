import React from "react"
import { CreateItemState, CreateItemValidationError } from "../../../../../../types/data/items/create-item.data";

interface ItemFormProps {
    formData: CreateItemState;
    errors: CreateItemValidationError;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Picture({ picture }: { picture: File }) {
    const url = URL.createObjectURL(picture);

    return(
        <div className="flex items-center justify-center size-[100px]">
            <img src={url} alt="Picture" className="object-cover w-full h-full object-center rounded"/>
        </div>
    )
}

export default function ItemForm({ errors, formData, onChange: handleChange }: ItemFormProps) {
    return(
        <form className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="name" className="capitalize font-medium">name <span className="text-red-500">*</span></label>
                <input value={formData.name} onChange={handleChange} id="name" name="name" type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                <p className="text-sm text-red-500">
                    { errors.name }
                </p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="location" className="capitalize font-medium">location <span className="text-red-500">*</span></label>
                <input value={formData.location} onChange={handleChange} id="location" name="location" type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                <p className="text-sm text-red-500">
                    { errors.location }
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="pictures" className="capitalize font-medium">pictures</label>
                <label className="flex flex-wrap gap-2">
                    <input onChange={handleChange} multiple={true} id="pictures" name="pictures" type="file" accept="image" className="hidden"></input>
                    {
                            formData.pictures.map(pic => <Picture picture={pic} key={pic.name} />)
                    }
                    <div className="flex items-center justify-center size-[100px] bg-black/10 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </label>
                <p className="text-sm text-yellow-500">
                    { errors.pictures }
                </p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="workshop" className="capitalize font-medium">workshop <span className="text-red-500">*</span></label>
                <input value={formData.workshop} onChange={handleChange} id="workshop" name="workshop" type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                <p className="text-sm text-red-500">
                    { errors.workshop }
                </p>
            </div>
            <div className="flex flex-col mb-10">
                <label htmlFor="description" className="capitalize font-medium">description</label>
                <textarea value={formData.description} onChange={handleChange} id="description" name="description" className="h-[200px] bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                <p className="text-sm text-red-500">
                    { errors.description }
                </p>
            </div>
        </form>
    )
}