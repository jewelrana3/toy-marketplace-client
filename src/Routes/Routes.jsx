import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DetailsPag from "../pages/DetailsPag/DetailsPag";

import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";


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
        }
        ,{
          path:'details/:id',
          element:<DetailsPag></DetailsPag>,
          loader:({params}) => fetch(`http://localhost:4000/child/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;