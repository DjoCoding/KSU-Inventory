import React, { useEffect, useState } from "react";
import useUserStore from "../../../../hooks/users/useUserStore";
import useBroadcaster from "../../../../hooks/broadcaster/useBroadcaster";
import toast from "react-hot-toast";
import cn from "../../../../utils/cn";
import { useAuth } from "../../../../hooks/auth/useAuth";
import Loading from "../../../Loading/Loading";

function getPictureURL(picture: File) {
    return URL.createObjectURL(picture);
} 

export default function Picture() {
    const { user, refresh } = useAuth();

    const [picture, setPicture] = useState<string | File>(user.profile_pic as string);
    const setDefaultPicture = () => setPicture(user.profile_pic as string);
    
    const [onEdit, setOnEdit] = useState<boolean>(false);
    const edit = () => setOnEdit(true);
    const stopEditing = () => {
        setDefaultPicture();
        return setOnEdit(false);
    }

    const { updateProfilePicture, loading, err, success } = useUserStore();
    const notifySuccess = useBroadcaster("pfp_updated", (message) => toast.success(message));
    const notifyError   = useBroadcaster("pfp_not_updated", (message) => toast.error(message));


    useEffect(() => {
        if(!success) return;
        notifySuccess("Profile updated successfully");
    }, [success]);

    useEffect(() => {
        if(!err) return;
        notifyError("Failed to update profile");
        return setDefaultPicture();
    }, [err]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if(!files) return;
        const file = files[0];
        
        edit();
        return setPicture(file);
    }
    
    const handleSubmit = async () => {
        await updateProfilePicture(user.id as string, picture as File);
        await refresh();
        stopEditing();
    }

    if(loading) {
        return <Loading />
    }

    return(
        <div className="flex items-center justify-center mt-20">
            <div className="relative rounded-[50%] size-[300px] flex items-center justify-center">
                {
                    picture === null
                    ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-full cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    :
                    <img src={(picture instanceof File) ? getPictureURL(picture as File) : picture as string} className="w-full rounded-[50%] aspect-square object-cover object-top"/>
                }
                {
                    onEdit
                    &&
                    <button onClick={stopEditing} className="cursor-pointer rounded-[50%] bg-white absolute top-3 right-6 px-1 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                }
                <div className={cn(
                    "flex gap-1 absolute bottom-3",
                    picture === null ? "right-3" : "-right-3"
                )}>
                    
                    <label className="hover:scale-105 duration-200 transition-all cursor-pointer px-3 py-3 rounded-[50%] bg-white shadow-sm shadow-black">
                        <input onChange={handleFileUpload} type="file" accept="image" className="hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-105 duration-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </label>
                    {
                        onEdit
                        &&
                        <button onClick={handleSubmit} className="bg-green-300 hover:scale-105 duration-200 transition-all cursor-pointer px-3 py-3 rounded-[50%] shadow-sm shadow-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}