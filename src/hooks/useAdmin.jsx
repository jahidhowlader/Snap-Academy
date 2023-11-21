import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
// import toast from "react-hot-toast";

const useAdmin = () => {

    // GET TOKEN FROM LOCAL STORAGE
    const token = localStorage.getItem('access-token')

    // Import User From Auth Provider
    const { user } = useAuth();

    const { data: isAdmin = 'user', isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email,],
        queryFn: async () => {

            try {
                const res = await axios(`http://localhost:3000/checkRole/${user?.email}`, {
                    headers: {
                        authorization: token
                    }
                });

                return res.data;
            } catch (e) {
                console.log(e);
                console.log(e.response.data.message);
                // toast.error(e.response.data.message)
            }
        }
    })

    return { isAdmin, isLoading }
}
export default useAdmin;