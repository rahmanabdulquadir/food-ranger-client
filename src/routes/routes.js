import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import Services from "../pages/Home/Services/Services";
import SingleService from "../pages/Home/Services/SingleService";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import AddServices from "../pages/AddServices/AddServices/AddServices";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/services/:id',
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
        element: <SingleService></SingleService>,
      },
      {
        path: '/reviews',
        element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
      },
      {
        path: '/add_services',
        element: <AddServices></AddServices>
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
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

export default router;