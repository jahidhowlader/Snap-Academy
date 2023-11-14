import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {

    const { refetch, data: allUser = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {

            const result = await fetch('http://localhost:3000/allusers')
            return result.json()
        }
    })

    return { allUser, refetch }
};

export default useAllUser;