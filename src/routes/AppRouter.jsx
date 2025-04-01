import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from '../pages/RegisterPage'

const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage/>
    }
])

export default function AppRouter(){
    return <RouterProvider router={router}/>;
}

