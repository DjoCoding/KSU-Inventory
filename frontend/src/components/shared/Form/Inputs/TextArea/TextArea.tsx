import { FormInputProps } from "../../Form"

type TextAreaProps = FormInputProps<HTMLTextAreaElement, string>;

export default function TextArea({ onChange: handleChange, value, validationError, field, required, locked }: TextAreaProps) {
    return(
        <div className="flex flex-col mb-10">
            <label htmlFor={field} className="capitalize font-medium">description { required && <span className="text-red-500">*</span> } </label>
            {
                !locked
                ?
                <textarea value={value} onChange={handleChange} id={field} name={field} className="h-[200px] bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                :
                <p className="h-[200px] bg-black/40 rounded-xl px-2 py-2 text-lg font-normal text-black/40  outline-none">
                    { value }
                </p>
            }
            <p className="text-sm text-red-500">
                { validationError }
            </p>
        </div>
    )
}