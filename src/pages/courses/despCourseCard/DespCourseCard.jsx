import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import { motion } from "framer-motion"

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const DespCourseCard = ({ course }) => {
    return (
        <Link to={`/course/${course._id}`}>
            <div className='bg-white rounded-xl p-[14px] cursor-pointer grid grid-cols-5 md:gap-10 shadow-md mb-5'>

                {/* Card Image */}
                <div className='rounded-xl overflow-hidden col-span-2 xl:h-[230px] 2xl:h-[250px]'>
                    <img src={course.photo} alt={course.title} className=' rounded-xl h-full w-full hover:scale-125 duration-[2000ms]' />
                </div>

                {/* Card Content */}
                <div className=' text col-span-3'>
                    <h5 className='font-medium  lg:text-lg xl:text-xl  sm:text-2xl'>{course.title}</h5>
                    <p className='text-sm pt-2 opacity-80'>{course.description.slice(0, 150)}...</p>
                    <div className=' my-2'>
                        <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                    </div>
                    <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-4'>${course.price}</h5>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white">
                        Addmission
                    </motion.button>
                </div>
            </div>
        </Link>
    );
};

export default DespCourseCard;