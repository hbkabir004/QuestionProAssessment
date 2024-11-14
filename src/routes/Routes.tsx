import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Comments from "../pages/CommentsPage";
import Dashboard from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import MyComponent from "../pages/MyComponent";
import Posts from "../pages/Posts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        path: "posts",
                        element: <Posts/>,
                        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
                    },
                    {
                        path: "comments",
                        element: <Comments/>,
                    },
                ]
            },
            {
                path: "/my-component",
                element: <MyComponent/>,
            },
        ]
    },
]);