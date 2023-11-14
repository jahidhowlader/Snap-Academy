import PropTypes from 'prop-types';
import './Control.css'

const PriceRange = ({ priceQuery, setPriceQuery, minPrice, maxPrice }) => {

    return (
        <div className='p-5 pt-0 2xl:p-10 2xl:pt-0'>
            <h3 className='lg:text-lg 2xl:text-2xl font-semibold'>Price Range</h3>
            <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceQuery}
                onChange={(e) => setPriceQuery(e.target.value)}
                className='w-full cursor-pointer mt-6 volume-slider' />

            <div className='flex justify-between items-center px-1 text-xs xl:text-sm 2xl:text-base'>
                <p>${priceQuery ? priceQuery : 0}</p>
                <p>${maxPrice}</p>
            </div>
        </div>
    );
};

PriceRange.propTypes = {
    priceQuery: PropTypes.string.isRequired,
    setPriceQuery: PropTypes.func.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
};
export default PriceRange;