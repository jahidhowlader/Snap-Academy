import './Control.css'

const PriceRange = () => {
    return (
        <div className='p-5 pt-0 2xl:p-10 2xl:pt-0'>
            <h3 className='lg:text-lg 2xl:text-2xl font-semibold'>Price Range</h3>
            <input type="range" id="vol" name="vol" min="0" max="100"  className='w-full cursor-pointer mt-6 volume-slider' />

            <div className='flex justify-between items-center px-1 text-xs xl:text-sm 2xl:text-base'>
                <p>$5</p>
                <p>$100</p>
            </div>
        </div>
    );
};

export default PriceRange;