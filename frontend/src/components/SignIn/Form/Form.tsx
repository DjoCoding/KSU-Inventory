import React from "react";
import { LoginUserData, LoginUserDataValidationError } from "../../../types/data/auth/login-user.data";
import Button from "../Button/Button";

interface FormProps {
    formData: LoginUserData;
    errors: LoginUserDataValidationError;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
}

export default function Form({ formData, errors, onChange: handleChange, onSubmit: handleSubmit }: FormProps) {
    return(
        <form className="mt-10">
            <div className="flex flex-col border-2 border-black/10 rounded-2xl">
                <div className="flex flex-col px-3 border-b-2 border-b-black/10">
                    <input onChange={handleChange} name="username" value={formData.username}  type="text" className="py-4 text-lg text-black/70 outline-none" placeholder="Username"/>
                    <p className="text-sm text-red-500">{ errors.username }</p>
                </div>
                <div className="flex flex-col px-3 py-1">
                    <input onChange={handleChange} name="password" value={formData.password}  type="password" className="py-4 text-lg text-black/70 outline-none" placeholder="Password"/>
                    <p className="text-sm text-red-500">{ errors.password }</p>
                </div>
            </div>
            <Button onClick={handleSubmit} />
        </form>
    )
}