import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddBrainToy from "../components/AddBrainToy/AddBrainToy";
import AllToy from "../components/AllToy/AllToy";
import Blog from "../components/Blog/Blog";
import Details from "../components/AllToy/Details";
import Mytoy from "../components/Mytoy/Mytoy";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Shared/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import UpdateToy from "../pages/UpdateToy/UpdateToy";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'addtoy',
          element:<AddBrainToy></AddBrainToy>
        }
        ,
        {
          path:'alltoy',
          element:<AllToy></AllToy>,
          loader:()=>fetch('http://localhost:4000/allToy')
        },
        {
          path:'mytoy',
          element:<Mytoy></Mytoy>,
         
        },
        {
          path:'updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`http://localhost:4000/alltoy/${params.id}`)
        },
        {
          path:'details/:id',
          element:<PrivateRouter><Details></Details></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:4000/allToy/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
       
      ]
    },
   
  ]);

  export default router;