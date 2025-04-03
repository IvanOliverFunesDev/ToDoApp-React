import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from '../pages/RegisterPage'
import LoginPage from "../pages/LoginPage";
import NewTaskPage from "../pages/NewTaskPage";
import TaskPage from "../pages/TaskPage";
import EditTaskPage from "../pages/EditTaskPage";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/tasks/new",
        element: <NewTaskPage />
    },
    {
        path: "/tasks",
        element: <TaskPage />
    },
    {
        path: "/tasks/edit/:id",
        element: <EditTaskPage />
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />;
}

