import {useEffect} from "react";
import {useAuth} from "react-oidc-context";
import {api} from "../api/api.ts";

export function useAxios() {

    const auth = useAuth();

    useEffect(() => {
        const requestIntercept = api.interceptors.request.use(
            (config) => {
                if (auth.user?.access_token) {
                    config.headers['Authorization'] = `Bearer ${auth.user.access_token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        return () => {
            api.interceptors.request.eject(requestIntercept);
        }
    }, [auth.user])

    return api

}