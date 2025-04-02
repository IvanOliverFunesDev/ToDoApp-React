import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from '../pages/RegisterPage'
import LoginPage from "../pages/LoginPage";
import NewTaskPage from "../pages/NewTaskPage"

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
        path: "/crearTask",
        element: <NewTaskPage />
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />;
}

