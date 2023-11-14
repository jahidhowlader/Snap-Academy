import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import MainLayout from "../layout/MainLayout";
import Courses from "../pages/courses/courses/Courses";
import Instructor from "../pages/instructor/instructor/Instructor";
import Error404 from "../pages/home/error404/Error404";
import SingleCourse from "../pages/singleCourse/singleCourse/SingleCourse";
import Signin from "../pages/auth/signin/Signin";
import Signup from "../pages/auth/signup/Signup";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import DashboardLayout from "../layout/DashboardLayout";
import MyCart from "../pages/cart/MyCart";
import AllUser from "../pages/dashboard/allUser/AllUser";


export const router = createBrowserRouter([
  // ERROR 404
  {
    path: '*',
    element: <Error404 />
  },
  // ROOT TOUTES
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'course/:_id',
        element: <SingleCourse />,
        loader: ({ params }) => fetch(`http://localhost:3000/course/${params._id}`)
      },
      {
        path: 'instructor',
        element: <Instructor />
      },
      {
        path: 'myCart',
        element: <MyCart />
      }
    ]
  },
  // AUTHENTICATION
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        element: <Signin />

      }, {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'forgotPassword',
        element: <ForgotPassword />
      },
    ]
  },
  // DASHBOARD ROUTES
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'allUsers',
        element: <AllUser />
      }
      // {
      //   path: 'cart',
      //   element: <UserCart />
      // }
    ]
  }
]);