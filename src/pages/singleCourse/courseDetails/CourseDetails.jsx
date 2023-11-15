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
            <div className="overflow-hidden rounded-xl">
                <img src={course.photo} alt={course.title} className='w-full mx-auto rounded-xl hover:scale-125 duration-[2000ms] max-h-[426px]' />
            </div>

            {/* Product Information */}
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold">{course.title}</h3>
                <div className="flex items-center gap-4">

                    {/* REVIEW */}
                    <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                    <p className="opacity-60">(Customer review)</p>
                </div>
                <p>{course.description}</p>

                <p><span className="text-primary-color font-medium">Product Code:</span> {course.productCode}</p>
                <p><span className="text-primary-color font-medium">Availability:</span> {course.availability}</p>

                {/* PRICE */}
                <div className="flex items-center gap-5 pb-5">
                    <h4 className="text-primary-color font-bold 2xl:text-3xl">${course.price}</h4>
                    <h4 className=" 2xl:text-[28px] font-extralight line-through">$70.00</h4>
                </div>

                <div className="w-[100px] flex items-center shadow-lg rounded-md">

                </div>

                <div className="flex items-center gap-5 pt-5">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white">
                        Addmission
                    </motion.button>

                    <div className="bg-white p-2 2xl:p-3 shadow-md rounded-lg">
                        <FaCartPlus  className="text-primary-color"/>
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
        availability: PropTypes.string.isRequired,
        productCode: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    button: PropTypes.bool,
};

export default ProductDetails;