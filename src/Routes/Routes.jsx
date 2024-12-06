import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddEqui from "../Pages/AddEqui";
import PrivateRoute from "./PrivateRoute";
import MyEqui from "../Pages/MyEqui";
import AllEqui from "../Pages/AllEqui";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/allEqui',
        element: <AllEqui></AllEqui>,
        loader:() => fetch('http://localhost:4200/equi')
    },
    {
        path: '/addEqui',
        element: <PrivateRoute><AddEqui></AddEqui></PrivateRoute>
    },
    {
        path: '/myEqui',
        element: <PrivateRoute><MyEqui></MyEqui></PrivateRoute>
    },
  

    {
        path: '*',
        element: <Error></Error>
    }
])