import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import MyOrders from "../Pages/Dashboard/Buyers/MyOrders";
import MyWishlist from "../Pages/Dashboard/Buyers/MyWishlist";
import Payment from "../Pages/Dashboard/Buyers/Payment";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProduct from "../Pages/Dashboard/Seller/MyProduct";
import AllProducts from "../Pages/Home/Home/AllProducts/AllProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [

            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/products/:id',
                element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                
            
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>,
                loader: ()=> fetch('https://goodwill-store-server.vercel.app/categories')
                
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/mywishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://goodwill-store-server.vercel.app/bookings/${params.id}`)
            },

        ]
    },

        {
            path: '*',
            element:<NotFound></NotFound>
        }
    
])

export default router;