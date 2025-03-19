import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

import Loading from "../components/Loading/Loading";

interface PrivateRouteProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { fetch, loading, user } = useAuth();

    useEffect(() => {
        fetch();
    }, [fetch]);

    if(loading) {
        return <Loading />
    }

    return user?.username !== null ? children : <Navigate to="/signin" />
}