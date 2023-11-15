import { HiArrowLongRight } from 'react-icons/hi2';
import useGetCourses from '../../../hooks/useGetCourses';

const Offer = () => {

    // TODO: NEED OFFER COURSE
    const { courses } = useGetCourses()

    // console.log('courses', courses.slice(0, 2));

    return (
        <section >
            <h3 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-green pb-8 lg:pb-12 2xl:pb-8'>Special Offer</h3>

            <div className='grid md:grid-cols-2 gap-10 md:gap-5 '>

               
                <div
                    className='bg-white shadow-lg md:shadow-xl 2xl:shadow-2xl p-5 2xl:p-10 rounded-[15px] flex flex-col lg:flex-row items-center xl:items-start gap-3 cursor-pointer'>

                    {/* Card Content */}
                    <div className='order-2 lg:order-1 flex flex-col justify-between gap-3 md:gap-5 h-full'>
                        <div>
                            <h5 className='text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-medium text-primary-color'>John Greengo</h5>
                            <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] text-primary-color py-1 sm:py-2 xl:py-3 2xl:py-4'>Fundamentals</h3>
                            <p className='2xl:text-[18px] text-gray '>capturing light, composition, and moments to create compelling visual narratives.</p>
                        </div>
                        <p className='text-xl sm:text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] font-bold text-primary-color'>$30.00</p>
                    </div>

                    {/* Card Image */}
                    <div className='order-1 lg:order-2'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="/home/course4.png" alt="feature" className='w-full mx-auto grayscale rounded-xl shadow-2xl hover:scale-125 duration-[2000ms]' />
                        </div>
                        <p className=' flex items-center justify-end gap-2 font-bold text-primary-color sm:text-lg md:text-xl lg:text-2xl mt-5'>Order Now <HiArrowLongRight /></p>
                    </div>
                </div>

                <div className='bg-white shadow-lg md:shadow-xl 2xl:shadow-2xl p-5 2xl:p-10 rounded-[15px] flex flex-col lg:flex-row items-center xl:items-start gap-3 cursor-pointer'>

                    {/* Card Content */}
                    <div className='order-2 lg:order-1 flex flex-col justify-between gap-3 md:gap-5 h-full'>
                        <div>
                            <h5 className='text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-medium text-primary-color'>Chase Jarvis</h5>
                            <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] text-primary-color py-1 sm:py-2 xl:py-3 2xl:py-4'>SA Campaigns</h3>
                            <p className='2xl:text-[18px] text-gray '>crafting captivating visuals to promote products, services, and brands effectively</p>
                        </div>
                        <p className='text-xl sm:text-2xl lg:text-3xl xl:text-[35px] 2xl:text-[40px] font-bold text-primary-color'>$30.00</p>
                    </div>

                    {/* Card Image */}
                    <div className='order-1 lg:order-2'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="/home/course4.png" alt="feature" className='w-full mx-auto rounded-xl shadow-2xl hover:scale-125 duration-[2000ms]' />
                        </div>
                        <p className=' flex items-center justify-end gap-2 font-bold text-primary-color sm:text-lg md:text-xl lg:text-2xl mt-5'>Order Now <HiArrowLongRight /></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;