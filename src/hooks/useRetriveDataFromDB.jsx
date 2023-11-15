import { useQueries } from '@tanstack/react-query';

const useRetriveDataFromDB = () => {

    const user = 'allUser'
    const courses = 'allCourses'
    const instructor = 'allInstructors'

    const keyList = [user, courses, instructor]

    const results = useQueries({
        queries: ['http://localhost:3000/allUsers', 'http://localhost:3000/allCourses', 'http://localhost:3000/allInstructors'].map((api, idx) => (
            {
                queryKey: [keyList[idx], ], queryFn: async () => {
                    const result = await fetch(api);
                    return result.json();
                }, staleTime: Infinity
            }))
    });

    const allUsers = results[0].data;
    const allCourses = results[1].data;
    const allInstructors = results[2].data;

    const allUsersRefetch = results[0]?.refetch;
    const allCoursesRefetch = results[1].refetch;
    const allInstructorsRefetch = results[2].refetch;

    return {
        allUsers,
        allCourses,
        allInstructors,
        allUsersRefetch,
        allCoursesRefetch,
        allInstructorsRefetch
    }
};

export default useRetriveDataFromDB;