import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";
import useWorkshopStore from "../hooks/workshops/useWorkshopStore";

import { LayoutContextType } from "../layouts/Layout";
import { IUser } from "../types/user";

import toast from "react-hot-toast";
import Loading from "../components/Loading/Loading";
import { Workshop as WorkshopMainContent } from "../components/Workshop/Workshop";

export default function Workshop() {
    const { id } = useParams();
    const user = useAuth().user as IUser;
    const { 
        loading,
        error,
        getWorkshop, 
        selectedWorkshop, 
        selectedWorkshopItems
    } = useWorkshopStore();

    useEffect(() => {
        getWorkshop(id as string);
    }, []);

    useEffect(() => {
        if(!error) return;
        toast.error("Failed to get workshop");
    }, [error]);

    if((!selectedWorkshop) || (!selectedWorkshopItems) || loading) {
        return <Loading />
    }

    const { toggle } = useOutletContext<LayoutContextType>();
    
    return(
        <WorkshopMainContent toggle={toggle} user={user} workshop={selectedWorkshop} items={selectedWorkshopItems} />
    )
}