import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUsername } from "../Store/PosterSlice";

export default function RequireNotAuth() {
    const username = useSelector(selectUsername);
    if (username !== "") {
        return <Navigate to={"/"}/>
    }
    return <Outlet />
}