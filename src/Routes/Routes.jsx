import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DetailsPag from "../pages/DetailsPag/DetailsPag";

import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToy from "../pages/UpdateMyToy/UpdateMyToy";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>,
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'mytoy',
          element:<UpdateMyToy></UpdateMyToy>,
          loader:() => fetch("https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/alltoys")
        }
        ,{
          path:'details/:id',
          element:<PrivateRoute><DetailsPag></DetailsPag></PrivateRoute>,
          loader:({params}) => fetch(`https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/child/${params.id}`)
        },
        {
          path:'alltoys',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        },
        {
          path:'*',
          element:<ErrorPage></ErrorPage>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;