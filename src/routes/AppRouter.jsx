import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from '../pages/RegisterPage'

const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />;
}

