import { HiArrowLongRight } from 'react-icons/hi2';
import useGetCourses from '../../../hooks/useGetCourses';
import { Link } from 'react-router-dom';
import ViewOfferSkeleton from '../../../components/skeleton/offerSkeleton/ViewOfferSkeleton';

const Offer = () => {

    const { courses, courseLoading } = useGetCourses()

    const offerCourse = courses.filter(course => course.offer === 'yes')

    return (
        <section className='my-container sm:my-16 xl:my-24 2xl:my-32'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary-color pb-3 lg:pb-8'>Special Offer</h3>

            <div className='grid md:grid-cols-2 gap-5 '>

                {
                    courseLoading ? <ViewOfferSkeleton /> : offerCourse.map(course => <div
                        key={course._id}
                        className='bg-white shadow-sm border border-gray border-opacity-30 p-2 lg:p-4 xl:p-6 2xl:p-10 flex flex-col lg:flex-row items-center xl:items-start gap-3 rounded xl:rounded-md'
                    >
                        {/* Card Content */}
                        <div className='flex-1 order-2 lg:order-1 flex flex-col justify-between gap-3 md:gap-5 h-full p-3 lg:p-0'>
                            <div>
                                <h5 className='text-lg lg:text-xl font-medium'>{course.instructor}</h5>
                                <Link to={`/course/${course._id}`}>
                                    <h3 className='font-bold text-xl xl:text-2xl text-primary-color py-1 sm:py-2 xl:pb-3 2xl:pb-4 hover:underline'>{course.title}</h3>
                                </Link>
                                <p className=' text-gray '>{course.description.slice(0, 100)}...</p>
                            </div>
                            <p className='text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] font-bold text-primary-color'>${course.price / 2}</p>
                        </div>

                        {/* Card Image */}
                        <div className='flex-1 order-1 lg:order-2'>
                            <div className='overflow-hidden'>
                                <Link to={`/course/${course._id}`}>
                                    <img src={course.photo} alt="feature" className='w-full mx-auto shadow-2xl hover:scale-105 duration-[2000ms] rounded xl:rounded-md' />
                                </Link>
                            </div>

                            <Link to={`/course/${course._id}`}>
                                <button className='flex items-center justify-end gap-2 w-full font-bold text-primary-color sm:text-lg md:text-xl lg:text-2xl mt-5'>
                                    Purchase Now <HiArrowLongRight />
                                </button >
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Offer;