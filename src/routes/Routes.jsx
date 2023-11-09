import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import MainLayout from "../layout/MainLayout";
import Courses from "../pages/courses/courses/Courses";
import SingleCourse from "../pages/singleCourse/SingleCourse";
import Instructor from "../pages/instructor/instructor/Instructor";


export const router = createBrowserRouter([
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