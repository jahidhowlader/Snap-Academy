import { Rating } from '@smastrom/react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import '@smastrom/react-rating/style.css'

const PopularCourseCard = () => {
    return (
        <div className='bg-white rounded-xl p-[14px] cursor-pointer'>

            {/* Card Image */}
            <div className='rounded-xl overflow-hidden'>
                <img src="/home/course4.png" alt="" className=' rounded-xl 2xl:h-[250px] w-full hover:scale-125 duration-[2000ms]' />
            </div>

            {/* Card Content */}
            <div className='py-5 text-center'>
                <h5 className='font-medium text-xl  sm:text-2xl'>Capturing the narrative </h5>
                <div className='flex justify-center my-2'>
                    {/* <Rating
                        style={{ maxWidth: 180 }}
                        value={3}
                        readOnly
                    /> */}

                    
                </div>
                <h5 className='font-bold text-xl  sm:text-2xl text-light-green'>$75.00</h5>
            </div>
        </div>
    );
};

export default PopularCourseCard;