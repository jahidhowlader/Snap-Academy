import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import MainLayout from "../layout/MainLayout";
import Courses from "../pages/courses/courses/Courses";
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
import PrivateRoute from "./PrivateRoute";
import About from "../pages/about/About";
import AdminRoute from "./AdminRoute";
import Error404 from "../pages/error404/Error404";
import PaymentError from "../pages/dashboard/payment/paymentError/PaymentError";
import PaymentSuccess from "../pages/dashboard/payment/paymentSuccess/PaymentSuccess";


export const router = createBrowserRouter([

  // ROOT TOUTES
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // ERROR 404
      {
        path: '*',
        element: <Error404 />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/error?',
        element: <PrivateRoute><PaymentError /></PrivateRoute>
      },
      {
        path: '/success',
        element: <PrivateRoute><PaymentSuccess /> </PrivateRoute>
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'course/:_id',
        element: <SingleCourse />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      // AUTHENTICATION
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

  // DASHBOARD ROUTES
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: 'admin',
        element: <AdminRoute><AdminDashboard /></AdminRoute>
      },
      {
        path: 'user',
        element: <PrivateRoute><UserDashboard /></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: 'review',
        element: <PrivateRoute><Reviews /></PrivateRoute>
      },
      {
        path: 'enrolledHistory',
        element: <PrivateRoute><EnrolledHistort /></PrivateRoute>
      },
      {
        path: 'cart',
        element: <PrivateRoute><Cart /></PrivateRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUser /></AdminRoute>
      }
    ]
  }
]);