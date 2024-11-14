import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const MainLayout = () => {
    return (
        <div className="md:mx-[17rem] mx-2">
        <div className="border-b-2 pb-4 mb-4">
        <Header/>
        </div>
        <Outlet/>
        </div>
    );
};

export default MainLayout;