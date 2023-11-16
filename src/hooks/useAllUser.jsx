import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {


    const { refetch, data: allUser = [], isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {

            const result = await fetch('https://snap-academy-server.vercel.app/allusers')
            // setUserLoading(false)
            return result.json()
        }
    })

    return { allUser, isLoading, refetch }
};

export default useAllUser;