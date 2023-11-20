import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAdmin = () => {
    
    const { user } = useAuth();

    const { data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:3000/checkRole/${user?.email}`, );

            return res.data;
        }
    })

    return { isAdmin }
}
export default useAdmin;