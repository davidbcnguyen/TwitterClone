import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
    const location = useLocation();
    const auth = true;
    if (!auth) {
        return <Navigate to={"/login"} state={{ from: location }}/>
    }
    return <Outlet />
}