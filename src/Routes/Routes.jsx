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
// import DetailsRoute from "../Layout/DetailsRoute";

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
          // loader:({params})=>fetch(`http://localhost:4000/allToy/${params.email}`)
        },
        {
          path:'details/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:4000/allToy/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
       
      ]
    },
    // {
    //   path:'details',
    //   element:<DetailsRoute></DetailsRoute>,
    //   children:[
    //     {
    //       path:'details/:id',
    //       element:<Details></Details>,
    //       loader:({params})=>fetch(`http://localhost:4000/addtoy/${params.id}`)
    //     }
    //   ]
    // }
  ]);

  export default router;