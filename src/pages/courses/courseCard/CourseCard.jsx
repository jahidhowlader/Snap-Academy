import PropTypes from "prop-types";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import useAddToCart from "../../../hooks/useAddToCart";

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const CourseCard = ({ course, button }) => {

    // IMPLEMENT ADD TO CART LOGIC WITH LOCAL STORAGE
    const { storedCart, handlerAddToCart } = useAddToCart()

    // COURSE REVIEW
    const courseReview = course.review.reduce((acc, cur) => (acc + cur.rating) , 0)
    // console.log(courseReviewList / 2);
    // console.log(course.review.length);

    return (
        <div className='bg-white p-2 shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md'>

            {/* Card Image */}
            {
                button ? (
                    <Link to={`/course/${course._id}`}>
                        <div className=' overflow-hidden'>
                            <img src={course.photo} alt="" className=' h-[190px] sm:h-[220px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px] w-full hover:scale-105 duration-[2000ms] object-cover rounded ' />
                        </div>
                    </Link>
                ) : (
                    <Link to={`/course/${course._id}`}>
                        <div className=' overflow-hidden'>
                            <img src={course.photo} alt={course.title} className='h-[190px] sm:h-[220px] lg:h-[180px] xl:h-[200px] 2xl:h-[150px] w-full hover:scale-105 duration-[2000ms] object-cover rounded' />
                        </div>
                    </Link>

                )
            }

            {/* Card Content */}
            <div className='py-5 text-center'>
                <Link to={`/course/${course._id}`}>
                    <h5 className='font-medium  text-lg hover:underline hyphens-auto'>{course.title.slice(0, 45)}...</h5>
                </Link>
                <div className='flex justify-center my-2'>
                    <Rating style={{ maxWidth: 100 }} value={courseReview / course.review.length} itemStyles={ratingStyle} readOnly />
                </div>
                <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-2'>${course.price}</h5>

                {
                    button && <motion.button
                        whileTap={{ scale: 0.95 }}
                        className={`${storedCart.includes(course._id) ? 'bg-black' : 'bg-primary-color hover:bg-opacity-90'} px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white text-sm`}
                        onClick={() => handlerAddToCart(course._id)}
                        disabled={storedCart.includes(course._id)}
                    >
                        Add to cart
                    </motion.button>
                }
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        review: PropTypes.array.isRequired
    }).isRequired,
    button: PropTypes.bool,
};

export default CourseCard;