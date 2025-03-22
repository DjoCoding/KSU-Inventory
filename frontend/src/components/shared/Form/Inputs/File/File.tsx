import React from "react";
import { FormInputProps } from "../../Form";

type FileProps = FormInputProps<HTMLInputElement, File[]> & { Component: React.FC<{ file: File }> };

export default function File({ onChange: handleChange, value: files, validationError, field, Component, required }: FileProps) {
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={field} className="capitalize font-medium">{field} { required && <span className="text-red-500">*</span> }</label>
            <label className="flex flex-wrap gap-2">
                <input onChange={handleChange} multiple={true} id={field} name={field} type="file" accept="image" className="hidden"></input>
                { files.map(file => <Component file={file} />) }
                <div className="flex items-center justify-center size-[100px] bg-black/10 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black/50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </label>
            <p className="text-sm text-yellow-500">
                { validationError }
            </p>
        </div>
    )
}