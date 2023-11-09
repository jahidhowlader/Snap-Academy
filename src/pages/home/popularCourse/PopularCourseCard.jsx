import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}
const PopularCourseCard = () => {
    return (
        <div className='bg-white rounded-xl p-[14px] pb-0 cursor-pointer'>

            {/* Card Image */}
            <div className='rounded-xl overflow-hidden'>
                <img src="/home/course4.png" alt="" className=' rounded-xl 2xl:h-[250px] w-full hover:scale-125 duration-[2000ms]' />
            </div>

            {/* Card Content */}
            <div className='py-5 text-center'>
                <h5 className='font-medium text-xl  sm:text-2xl'>Capturing the narrative </h5>
                <div className='flex justify-center my-2'>
                    <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                </div>
                <h5 className='font-bold text-xl  sm:text-2xl text-primary-color'>$75.00</h5>
            </div>
        </div>
    );
};

export default PopularCourseCard;