import { Link } from 'react-router-dom';
import useGetCourses from '../../../hooks/useGetCourses';
import CourseCard from '../../courses/courseCard/CourseCard';
import ViewCourseCardSkeleton from '../../../components/skeleton/courseCardSkeleton/ViewCourseCardSkeleton';

const PopularCourse = () => {

    // use HOOK FOR GET ALL COURSES
    const { courses, courseLoading } = useGetCourses()

    return (
        <section className='my-container my-32'>
            <div className='flex flex-col md:flex-row sm:justify-between items-start xl:items-end pb-8 md:pb-2'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-green  lg:pb-8'>Our Popular Course</h3>
                <Link to={'/courses'} className='2xl:text-xl border-b text-primary-color sm:pt-0'>Explore More</Link>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    courseLoading ? <ViewCourseCardSkeleton /> : courses.slice(0, 8).map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </section>
    );
};

export default PopularCourse;