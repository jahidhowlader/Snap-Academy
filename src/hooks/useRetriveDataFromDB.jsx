import { useQueries } from '@tanstack/react-query';

const useRetriveDataFromDB = () => {

    const user = 'allUser'
    const courses = 'allCourses'
    const instructor = 'allInstructors'

    const keyList = [user, courses, instructor]

    const results = useQueries({
        queries: ['https://snap-academy-server.vercel.app/allUsers', 'https://snap-academy-server.vercel.app/allCourses'].map((api, idx) => (
            {
                queryKey: [keyList[idx],], queryFn: async () => {
                    const result = await fetch(api);
                    return result.json();
                }, staleTime: Infinity
            }))
    });

    const allUsers = results[0].data || [];
    const allCourses = results[1].data || [];

    const allUsersRefetch = results[0]?.refetch;
    const allCoursesRefetch = results[1].refetch;

    return {
        allUsers,
        allCourses,
        allUsersRefetch,
        allCoursesRefetch,
    }
};

export default useRetriveDataFromDB;