import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectUsername } from "../Store/PosterSlice";

export default function RequireAuth() {
    const location = useLocation();
    const username = useSelector(selectUsername);
    if (username === "") {
        return <Navigate to={"/login"} state={{ from: location }}/>
    }
    return <Outlet />
}