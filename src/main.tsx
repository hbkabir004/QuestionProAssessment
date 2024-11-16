import { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";

// Create a context for user data
export const UserContext = createContext<any>(null);

const AppProvider = () => {
    const [user, setUser] = useState({ name: "Abir", email: "abir@gmail.com" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
};

createRoot(document.getElementById("root")!).render(<AppProvider />);
