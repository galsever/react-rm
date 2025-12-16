import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "react-oidc-context";
import Sidebar from "../components/sidebar.tsx";

export default function Layout() {

    const auth = useAuth();

    if (auth.isLoading) return <p>Loading...</p>
    if (!auth.isAuthenticated) return <Navigate to="/" />

    return (
        <Sidebar>
            <Outlet />
        </Sidebar>
    )
}