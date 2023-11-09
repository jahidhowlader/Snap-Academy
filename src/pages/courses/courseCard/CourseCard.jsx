import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const CourseCard = () => {
    return (
        <div className='bg-white rounded-xl p-[14px] cursor-pointer shadow-md'>

            {/* Card Image */}
            <div className='rounded-xl overflow-hidden'>
                <img src="/home/course4.png" alt="" className=' rounded-xl 2xl:h-[170px] w-full hover:scale-125 duration-[2000ms]' />
            </div>

            {/* Card Content */}
            <div className='py-5 text-center'>
                <h5 className='font-medium  lg:text-lg xl:text-xl  sm:text-2xl'>Capturing the narrative </h5>
                <div className='flex justify-center my-2'>
                <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />

                </div>
                <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-2'>$75.00</h5>

                <button className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default CourseCard;