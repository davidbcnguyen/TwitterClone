import { Navigate, Outlet } from "react-router-dom";

export default function RequireNotAuth() {
    const auth = true;
    if (auth) {
        return <Navigate to={"/"}/>
    }
    return <Outlet />
}