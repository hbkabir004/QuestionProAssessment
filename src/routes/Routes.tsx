import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommentsPage from "../pages/CommentsPage";
import Dashboard from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import MyComponent from "../pages/MyComponent";
import PostsPage from "../pages/PostsPage";
import UserFormPage from "../pages/UserFormPage";

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
                        element: <PostsPage/>,
                        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
                    },
                    {
                        path: "comments",
                        element: <CommentsPage/>,
                        loader: () => fetch(`https://jsonplaceholder.typicode.com/comments`)
                    },
                ]
            },
            {
                path: "/my-component",
                element: <MyComponent/>,
            },
            {
                path: "/user",
                element: <UserFormPage/>,
            },
        ]
    },
]);