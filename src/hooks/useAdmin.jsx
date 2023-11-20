import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

// GET TOKEN FROM LOCAL STORAGE
const token = localStorage.getItem('access-token')

// INJECT HEADER IN FETCH
const axiosConfig = {
    headers: {
        authorization: token
    }
};

const useAdmin = () => {
    
    const { user } = useAuth();

    const { data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios(`https://snap-academy-server.vercel.app/checkRole/${user?.email}`, axiosConfig);

            return res.data;
        }
    })

    return { isAdmin }
}
export default useAdmin;