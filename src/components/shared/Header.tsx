import { NavLink } from "react-router-dom";
import { MyButton } from "./Button";

const Header = () => {
    return (
        <div className="flex justify-start mt-10">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `me-6 ${isActive ? "active" : ""}`
                }
            >
                <MyButton
                    btnname="Home"
                    className="font-semibold text-lg"
                />


            </NavLink>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `me-6 ${isActive ? "active" : ""}`
                }
            >
                <MyButton
                    btnname="Dashboard"
                    className="font-semibold text-lg"
                />
            </NavLink>
            <NavLink
                to="/my-component"
                className={({ isActive }) =>
                    `me-6 ${isActive ? "active" : ""}`
                }
            >
                <MyButton
                    btnname="My Component"
                    className="font-semibold text-lg"
                />

            </NavLink>
        </div>
    );
};

export default Header;