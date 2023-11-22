import PropTypes from "prop-types";
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import { motion } from "framer-motion"
import { FaCartPlus } from "react-icons/fa";


const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#0F5259',
    inactiveFillColor: '#d2d2d2'
}

const ProductDetails = ({ course }) => {


    return (
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 xl:gap-14 2xl:gap-[80px] mt-10 mb-10">

            {/* Product Photo */}
            <div className="overflow-hidden rounded xl:rounded-md">
                <img src={course.photo} alt={course.title} className='w-full mx-auto rounded xl:rounded-md hover:scale-105 duration-[2000ms] max-h-[426px]' />
            </div>

            {/* Product Information */}
            <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold pb-3 lg:pb-8">{course.title}</h3>
                <div className="flex items-center gap-4">

                    {/* REVIEW */}
                    <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                    <p className="opacity-60 italic">(Customer review)</p>
                </div>
                <p>{course.description}</p>

                <p><span className="text-primary-color font-semibold uppercase text-sm sm:text-base">instructor:</span> {course.instructor}</p>
                <p><span className="text-primary-color font-semibold uppercase text-sm sm:text-base">Course Code:</span> {course.productCode}</p>

                {/* PRICE */}
                <div className="flex items-center gap-5 sm:pb-5">
                    <h4 className="text-primary-color font-bold 2xl:text-3xl">${course.offer === 'yes' ? course.price / 2 : course.price}</h4>
                    <h4 className=" 2xl:text-[28px] font-extralight line-through">${course.oldPrice}</h4>
                </div>

                <div className="w-[100px] flex items-center shadow-lg rounded-md">

                </div>

                <div className="flex items-center gap-5 pt-5">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded xl:rounded-md text-white">
                        Addmission
                    </motion.button>

                    <div className="bg-white p-2 2xl:p-3 shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md">
                        <FaCartPlus className="text-primary-color" />
                    </div>
                </div>

                {/* TODO: SHARE WITH SOCIAL MEDIA */}
                {/* <div>
                        <p>Share</p>

                        <div>
                            <FaFacebookF />
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        instructor: PropTypes.string.isRequired,
        productCode: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number.isRequired,
        offer: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.bool,
};

export default ProductDetails;