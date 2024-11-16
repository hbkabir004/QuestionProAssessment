import { useContext } from "react";
import SideNav from "../components/shared/SideNav";
import { UserContext } from "../main";

const UserFormPage = () => {
    const { user, setUser } = useContext(UserContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser((prev: any) => ({ ...prev, [id]: value })); // Dynamically update state
    };

    return (
        <SideNav>
            <h1 className="text-2xl mb-5">Profile</h1>

            <form className="max-w-sm mx-auto">
                <div className="mb-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={user.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                    />
                </div>
            </form>
        </SideNav>
    );
};

export default UserFormPage;
