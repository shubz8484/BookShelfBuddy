import { createBrowserRouter, Router, Routes } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home';
import About from './../components/About';
import Blog from './../components/Blog';

import Shop from "../shop/Shop"
import SingleBook from './../shop/SingleBook';



import DashBoardLayout from "../dashboad/DashBoardLayout";
import DashBoard from "../dashboad/DashBoard"
import UploadBooks from './../dashboad/UploadBooks';
import ManageBooks from './../dashboad/ManageBooks';
import EditBooks from './../dashboad/EditBooks';
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";



const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
           
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/book/:id",
                element: <SingleBook/>,
                loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashBoardLayout/>,
        children:[
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><DashBoard/></PrivateRoute>,
        },
        {
            path: "/admin/dashboard/upload",
            element: <UploadBooks/>,
    },
    {
        path: "/admin/dashboard/manage",
        element: <ManageBooks/>,
},
{
    path: "/admin/dashboard/edit-books/:id",
    element: <EditBooks/>,
    loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
}

    ]
      
      
    },
    {
        path: "sign-up",
        element: <Signup/>
    },
    {
        path: "/login",
        element:<Login/>
    },
    {
        path: "/logout",
        element: <Logout/>
    }
]);

export default router;
