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
import AllUser from "../pages/dashboard/allUser/AllUser";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/dashboard/profile/Profile";
import Reviews from "../pages/dashboard/reviews/Reviews";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import UserDashboard from "../pages/dashboard/userDashBoard/UserDashboard";
import EnrolledHistort from "../pages/dashboard/enrolledHistory/EnrolledHistort";


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
        loader: ({ params }) => fetch(`https://snap-academy-server.vercel.app/course/${params._id}`)
      },
      {
        path: 'instructor',
        element: <Instructor />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'auth/signin',
        element: <Signin />

      }, {
        path: 'auth/signup',
        element: <Signup />
      },
      {
        path: 'auth/forgotPassword',
        element: <ForgotPassword />
      }
    ]
  },
  // AUTHENTICATION
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: 'signin',
  //       element: <Signin />

  //     }, {
  //       path: 'signup',
  //       element: <Signup />
  //     },
  //     {
  //       path: 'forgotPassword',
  //       element: <ForgotPassword />
  //     },
  //   ]
  // },
  // DASHBOARD ROUTES
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'admin',
        element: <AdminDashboard />
      },
      {
        path: 'user',
        element: <UserDashboard />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'review',
        element: <Reviews />
      },
      {
        path: 'enrolledHistory',
        element: <EnrolledHistort />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'allUsers',
        element: <AllUser />
      }

    ]
  }
]);