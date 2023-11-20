import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAllCourse = () => {

    const navigate = useNavigate()

    // GET TOKEN FROM LOCAL STORAGE
    const token = localStorage.getItem('access-token')

    const { refetch, data: allCourse = [], isLoading } = useQuery({
        queryKey: ['allcourses'],
        queryFn: async () => {

            try {
                const result = await axios('https://snap-academy-server.vercel.app/allCourses', {
                    headers: {
                        authorization: token
                    }
                })
                return result.data

            } catch (e) {
                console.log(e);
                console.log(e.response.data.message);
                toast.error(e.response.data.message)
                return navigate('/')
            }
        }
    })

    return { allCourse, isLoading, refetch }
};

export default useAllCourse;