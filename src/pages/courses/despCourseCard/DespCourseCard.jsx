import { Rating, ThinRoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const DespCourseCard = () => {
    return (
        <div className='bg-white rounded-xl p-[14px] cursor-pointer flex flex-col md:flex-row md:items-center md:gap-10 shadow-md'>

            {/* Card Image */}
            <div className='rounded-xl overflow-hidden'>
                <img src="/home/course4.png" alt="" className=' rounded-xl h-auto w-full hover:scale-125 duration-[2000ms]' />
            </div>

            {/* Card Content */}
            <div className='py-5 text'>
                <h5 className='font-medium  lg:text-lg xl:text-xl  sm:text-2xl'>Capturing the narrative </h5>
                <p className='text-sm pt-2 opacity-80'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                    quam, feugiat vitae, ultricies eget, <span className='hidden xl:block'>tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus.  Mauris placerat eleifend leo.Pellentesque habitant </span></p>
                <div className=' my-2'>
                    <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                </div>
                <h5 className='font-bold text-xl  sm:text-xl 2xl:text-2xl text-primary-color pb-4'>$75.00</h5>

                <button className="bg-primary-color hover:bg-opacity-90 px-4 sm:px-6 py-1 sm:py-2 rounded-md text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default DespCourseCard;