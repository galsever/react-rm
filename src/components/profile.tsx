import {useAuth} from "react-oidc-context";

export default function Profile() {

    const auth = useAuth();

    return (
        <div className="p-3 m-1 h-14 flex gap-2 rounded-lg bg-red-500">
            <img src={auth.user?.profile.picture} alt="Profile Picture" className="w-10 h-10 rounded-full" />
        </div>
    )
}