import PropTypes from "prop-types";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const CourseCard = ({ course, button }) => {
    return (
        <Link to={`/course/${course._id}`}>
            <div className='bg-white rounded-xl p-[14px] cursor-pointer shadow-md'>

                {/* Card Image */}
                {
                    button ? (
                        <div className='rounded-xl overflow-hidden'>
                            <img src={course.photo} alt="" className=' rounded-xl 2xl:h-[170px] w-full hover:scale-125 duration-[2000ms]' />
                        </div>
                    ) : (
                        <div className='rounded-xl overflow-hidden'>
                            <img src={course.photo} alt={course.title} className=' rounded-xl 2xl:h-[250px] w-full hover:scale-125 duration-[2000ms]' />
                        </div>
                    )
                }

                {/* Card Content */}
                <div className='py-5 text-center'>
                    <h5 className='font-medium  lg:text-lg xl:text-xl  sm:text-2xl'>{course.title.slice(0, 45)}...</h5>
                    <div className='flex justify-center my-2'>
                        <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />

                    </div>
                    <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-2'>{course.price}</h5>

                    {
                        button && <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white">
                            Add to cart
                        </motion.button>
                    }
                </div>
            </div>
        </Link>
    );
};

CourseCard.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    button: PropTypes.bool,
};

export default CourseCard;