import { NavLink, Outlet } from "react-router-dom";
import { MyButton } from "../components/shared/MyButton";
import SideNav from "../components/shared/SideNav";

const Dashboard = () => {
    return (
        <div>
            <SideNav>
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
            </SideNav>
            <Outlet />
        </div>
    );
};

export default Dashboard;