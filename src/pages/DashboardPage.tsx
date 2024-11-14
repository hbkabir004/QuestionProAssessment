import { NavLink, Outlet } from "react-router-dom";
import { MyButton } from "../components/shared/Button";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-start">
                <NavLink
                    to="/dashboard/posts"
                    className={({ isActive }) =>
                        `me-6 ${isActive ? "active" : ""}`
                    }
                >
                    <MyButton
                        btnname="Post"
                        className="font-semibold text-lg" />
                </NavLink>

                <NavLink
                    to="/dashboard/comments"
                    className={({ isActive }) =>
                        `me-6 ${isActive ? "active" : ""}`
                    }
                >
                    <MyButton
                        btnname="Comments"
                        className="font-semibold text-lg" />
                </NavLink>

            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;