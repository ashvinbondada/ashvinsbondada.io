import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function NavBarPage() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}