import { HiArrowLongRight } from 'react-icons/hi2';
import useGetCourses from '../../../hooks/useGetCourses';
import { Link } from 'react-router-dom';
import ViewOfferSkeleton from '../../../components/skeleton/offerSkeleton/ViewOfferSkeleton';

const Offer = () => {

    // TODO: NEED OFFER COURSE
    const { courses, courseLoading } = useGetCourses()

    const offerCourse = courses.filter(course => course.offer === 'yes')

    console.log('offer', offerCourse);

    return (
        <section >
            <h3 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-green pb-8 lg:pb-12 2xl:pb-8'>Special Offer</h3>

            <div className='grid md:grid-cols-2 gap-10 md:gap-5 '>

                {
                    courseLoading ? <ViewOfferSkeleton /> :offerCourse.map(course => <div
                        key={course._id}
                        className='bg-white shadow-lg md:shadow-xl 2xl:shadow-2xl p-5 2xl:p-10 rounded-[15px] flex flex-col lg:flex-row items-center xl:items-start gap-3 cursor-pointer '
                    >
                        {/* Card Content */}
                        <div className='flex-1 order-2 lg:order-1 flex flex-col justify-between gap-3 md:gap-5 h-full'>
                            <div>
                                <h5 className='text-lg lg:text-xl  font-medium text-primary-color'>{course.instructor}</h5>
                                <h3 className='font-bold text-xl xl:text-2xl text-primary-color py-1 sm:py-2 xl:py-3 2xl:py-4'>{course.title}</h3>
                                <p className=' text-gray '>{course.description.slice(0, 100)}...</p>
                            </div>
                            <p className='text-xl sm:text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] font-bold text-primary-color'>${course.price / 2}</p>
                        </div>

                        {/* Card Image */}
                        <div className='flex-1 order-1 lg:order-2'>
                            <div className='overflow-hidden rounded-lg'>
                                <img src={course.photo} alt="feature" className='w-full mx-auto rounded-xl shadow-2xl hover:scale-125 duration-[2000ms] ' />
                            </div>

                            <Link >
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