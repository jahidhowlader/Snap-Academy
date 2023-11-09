import { Link } from 'react-router-dom';
import PopularCourseCard from './PopularCourseCard';

const PopularCourse = () => {
    return (
        <section className='py-28'>
            <div className='flex flex-col md:flex-row justify-between items-start xl:items-end pb-8 md:pb-2'>
                <h3 className='text-2xl 2xl:text-5xl font-bold text-green 2xl:pb-8'>Our Popular Course</h3>
                <Link to={'/courses'} className='2xl:text-xl border-b text-primary-color pt-5 sm:pt-0'>Explore More</Link>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
            </div>
        </section>
    );
};

export default PopularCourse;