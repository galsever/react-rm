import './App.css'
import {useAuth} from "react-oidc-context";

export default function App() {

    const auth = useAuth();

    console.log(auth.isAuthenticated);
    return (
        <>
            <p className="text-2xl">Yo</p>
            <p>Active Navigator: {auth.activeNavigator}</p>
            <p>IsLoading: {auth.isLoading}</p>
            <p>Error: {auth.error?.message}</p>
            <p>{auth.isAuthenticated}</p>
            <p>User: {JSON.stringify(auth)}</p>
            {!auth.isAuthenticated && (
                <button onClick={() => auth.signinRedirect()}>Log in with Authentik</button>
            )}
            {auth.isAuthenticated && (
                <button onClick={() => auth.removeUser()}>Log out</button>
            )}
            <button onClick={async () => {

                const token = auth.user?.access_token
                if (!token) {
                    console.error('Token not found. Are you logged in?')
                    return
                }

                const response = await fetch("http://localhost:8080/auth/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const user = await response.json();
                console.log(user);
            }}>Fetch my user</button>
        </>
    )
}
