import { FormInputProps } from "../../Form"

type TextProps = FormInputProps<HTMLInputElement, string>;

export default function Text({ field, value, validationError, onChange: handleChange, required, locked }: TextProps) {
    return(
        <div className="flex flex-col">
            <label htmlFor={field} className="capitalize font-medium">{field} { required && <span className="text-red-500">*</span> } </label>
            
            {
                !locked
                ?
                <input value={value} onChange={handleChange} id={field} name={field} type="text" className="bg-black/10 rounded-xl px-2 py-2 text-lg font-normal text-black outline-none"/>
                :
                <p className="bg-black/40 rounded-xl px-2 py-2 text-lg font-normal text-black/40 outline-none">
                    { value }
                </p>
            }
            
            <p className="text-sm text-red-500">
                { validationError }
            </p>
        </div>
    )
}