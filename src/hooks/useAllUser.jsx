import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAllUser = () => {

    const navigate = useNavigate()

    // GET TOKEN FROM LOCAL STORAGE
    const token = localStorage.getItem('access-token')

    const { refetch, data: allUser = [], isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {

            try {
                const result = await axios('https://snap-academy-server.vercel.app/allusers', {
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

    return { allUser, isLoading, refetch }
};

export default useAllUser;