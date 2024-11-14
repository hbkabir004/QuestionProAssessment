import { NavLink } from "react-router-dom";
import { MyButton } from "./Button";

const Header = () => {
    return (
        <div className="flex justify-start mt-10">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `me-6 font-semibold text-xl ${isActive ? "active" : ""}`
                }
            >
                <MyButton btnname="Home" />


            </NavLink>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `me-6 font-semibold text-xl ${isActive ? "active" : ""}`
                }
            >
                <MyButton btnname="Dashboard" />
            </NavLink>
            <NavLink
                to="/my-component"
                className={({ isActive }) =>
                    `me-6 font-semibold text-xl ${isActive ? "active" : ""}`
                }
            >
                <MyButton btnname="My Component" />

            </NavLink>
        </div>
    );
};

export default Header;