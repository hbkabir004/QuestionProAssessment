import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-start">
                <NavLink
                    to="/dashboard/posts"
                    className={({ isActive }) =>
                    `me-6 font-semibold text-lg ${isActive ? "active" : ""}`
                }
                    >
                    Posts
                </NavLink>

                <NavLink
                    to="/dashboard/comments"
                    className={({ isActive }) =>
                    `me-6 font-semibold text-lg ${isActive ? "active" : ""}`
                }
                >
                    Comments
                </NavLink>

            </div>
            <Outlet/>
        </div>
    );
};

export default Dashboard;