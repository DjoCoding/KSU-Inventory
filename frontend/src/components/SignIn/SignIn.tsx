import { useEffect, useState } from "react";

import { LoginUserData, LoginUserDataValidationError } from "../../types/data/auth/login-user.data";
import { LoginUserValidationSchema } from "../../validation/auth/login-user.validation";

import { useAuth } from "../../hooks/auth/useAuth";

import Header from "./Header/Header";
import Form from "./Form/Form";
import Button from "./Button/Button";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import useBroadcaster from "../../hooks/broadcaster/useBroadcaster";
import toast from "react-hot-toast";

export function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginUserData>({
        username: "",
        password: ""
    });
    const setFormDataValue = (name: string, value: string) => setFormData((prev) => ({ ...prev, [name]: value }));

    const [validationErrors, setValidationErrors] = useState<LoginUserDataValidationError>({
        username: "",
        password: ""
    });
    const clearValidationErrors = () => setValidationErrors({ username: "", password: "" });
    
    const [error, setError] = useState<string>("");
    const clearError = () => setError("");

    const { user: { username }, login, loading, err, success } = useAuth();
    
    const sendMessage = useBroadcaster("successful-login", (message) => {
        toast.success(message);
    });

    useEffect(() => {
        if(err) {
            const e = err as { status: number };
            if(e.status == 401) {
                return setError("Incorrect username or password");
            }
            return setError("Internal server error");
        }
    }, [err]);

    useEffect(() => {
        if(!success || !username) return;
        sendMessage(`Welcome back @${username}`);
        navigate("/dashboard");
    }, [username, success]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataValue(name, value);
        clearValidationErrors();
        clearError();
    }

    const handleClick = async () => {
        const validationResult = LoginUserValidationSchema.safeParse(formData);
        const { success, error } = validationResult;
        
        if(success) return await login(formData);
        
        const e = error.format();
        setValidationErrors({
            username: e.username?._errors[0] || "",
            password: e.password?._errors[0] || ""
        })
    }

    if(loading) {
        return <Loading />
    } 

    return(
        <div className="rounded-xl py-8 px-10 flex flex-col bg-white">
            <Header error={error} />
            <Form formData={formData} errors={validationErrors} onChange={handleChange} />
            <Button onClick={handleClick} />
        </div>
    )
}