import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import MainLayout from "../layout/MainLayout";
import Courses from "../pages/courses/courses/Courses";
import SingleCourse from "../pages/singleCourse/SingleCourse";
import Instructor from "../pages/instructor/instructor/Instructor";
import Error404 from "../pages/home/error404/Error404";


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
      }
    ]
  },
]);