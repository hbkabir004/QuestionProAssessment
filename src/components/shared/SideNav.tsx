import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../main";

const SideNav = ({ children }: any) => {
    const { user } = useContext(UserContext); // Access user context

    return (
        <div className="flex items-start justify-between">
            <div>{children}</div>

            <div className="space-y-1">
                <Link className="text-sky-500 font-semibold" to="/user">
                    Hi {user.name}
                </Link>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default SideNav;
