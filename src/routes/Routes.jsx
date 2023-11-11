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


export const router = createBrowserRouter([
  {
    path: '*',
    element: <Error404 />
  },
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
        path: 'course/:id',
        element: <SingleCourse />
      },
      {
        path: 'instructor',
        element: <Instructor />
      },
    ]
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
  },
]);