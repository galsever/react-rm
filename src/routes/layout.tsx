import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "react-oidc-context";

export default function Layout() {

    const auth = useAuth();

    if (auth.isLoading) return <p>Loading...</p>
    if (!auth.isAuthenticated) return <Navigate to="/" />

    return (
        <div>
            <Outlet />
        </div>
    )
}