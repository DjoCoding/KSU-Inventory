import React, { useEffect, useState } from "react"
import { useAuth } from "../hooks/auth/useAuth";
import Loading from "../components/Loading/Loading";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
    const { loading, fetch } = useAuth();
    const [authStatus, setAuthStatus] = useState<boolean | null> (null);

    useEffect(() => {
        (async() => {
            const status = await fetch();
            return setAuthStatus(status);        
        })();
    }, []);

    if(authStatus === null || loading) {
        return <Loading />
    }


    return authStatus ? <Navigate to="/dashboard" /> : children
}