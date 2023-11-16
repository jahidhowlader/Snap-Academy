import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import { motion } from "framer-motion"
import PropTypes from "prop-types";
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import useAddToCart from '../../../hooks/useAddToCart';

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const DespCourseCard = ({ course }) => {

    // IMPLEMENT ADD TO CART LOGIC WITH LOCAL STORAGE
    const { storedCart, handlerAddToCart } = useAddToCart()

    return (
        <div className='bg-white rounded-xl p-[14px] md:grid md:grid-cols-5 md:items-center xl:items-start gap-5 md:gap-10 shadow-md mb-5'>

            {/* Card Image */}
            <div className='rounded-xl overflow-hidden md:col-span-2 md:h-[180px] xl:h-[230px] w-full 2xl:h-[250px]'>
                <Link to={`/course/${course._id}`}>
                    <img src={course.photo} alt={course.title} className=' rounded-xl h-full w-full hover:scale-125 duration-[2000ms]' />
                </Link>
            </div>

            {/* Card Content */}
            <div className=' text col-span-3 mt-5 md:mt-0'>
                <Link to={`/course/${course._id}`}>
                    <h5 className='font-medium  text-lg xl:text-xl sm:text-2xl hover:underline'>{course.title}</h5>
                </Link>
                <p className='text-sm pt-2 opacity-80'>{course.description.slice(0, 150)}...</p>
                <div className=' my-2'>
                    <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                </div>
                <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-4'>${course.price}</h5>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`${storedCart.includes(course._id) ? 'bg-black' : 'bg-primary-color hover:bg-opacity-90'} px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white`}
                    onClick={() => handlerAddToCart(course._id)}
                    disabled={storedCart.includes(course._id)}
                >
                    Add to cart
                </motion.button>
            </div>
        </div>
    );
};

DespCourseCard.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.bool,
};

export default DespCourseCard;