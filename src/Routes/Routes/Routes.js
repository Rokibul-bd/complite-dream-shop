import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Prodcuts from "../../Pages/SingleCataghories/Products/Prodcuts";
import PageNotFound from '../../Pages/PageNotFound/PageNotFound'
import Login from '../../Pages/Login/Login'
import SignUp from "../../Pages/SingUp/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import Carts from "../../Pages/Carts/Carts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <p>product page</p>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myorders',
                element: <PrivetRoutes> <Carts></Carts> </PrivetRoutes>
            },
            {
                path: '/services/:id',
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Prodcuts></Prodcuts>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router 