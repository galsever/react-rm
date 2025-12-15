import * as React from "react";
import {AuthProvider as OidcAuthProvider, useAuth} from "react-oidc-context"
import {WebStorageStateStore} from "oidc-client-ts";

interface Props {
    children: React.ReactNode;
}

const oidcConfig = {
    authority: "http://45.84.196.167:9000/application/o/ktor/",
    client_id: "6ZpynOWbaqaGl0BEdaFVFARCpcF2MkgZ6KLJHxRI",
    redirect_uri: "http://localhost:5173/",
    response_type: "code",
    scope: "openid profile email offline_access",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    onSigninCallback: () => {
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.replace("/app");
    }
};

export default function AuthProvider({ children }: Props) {

    return (
        <OidcAuthProvider {...oidcConfig}>
            <AuthLoadProvider>
                {children}
            </AuthLoadProvider>
        </OidcAuthProvider>
    )
}

function AuthLoadProvider({ children }: Props) {
    const auth = useAuth();

    if (auth.isLoading) return <p>Loading...</p>;

    return children
}