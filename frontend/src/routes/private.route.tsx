import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

import Loading from "../components/Loading/Loading";

interface PrivateRouteProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { fetch, loading } = useAuth();
    const [authStatus, setAuthStatus] = useState<boolean | null>(null);

    useEffect(() => {
        (async() => {
            const status = await fetch();
            return setAuthStatus(status);
        })();
    }, []);

    if(authStatus === null || loading) {
        return <Loading />
    }
    
    return authStatus? children : <Navigate to="/signin" /> 
}