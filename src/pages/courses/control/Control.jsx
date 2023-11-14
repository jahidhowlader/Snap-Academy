import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import Filter from './Filter';
import Category from './category';
import PriceRange from './PriceRange';
import { motion } from "framer-motion"

const open = {
    initial: {
        x: -400,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

const Control = ({ selectedCategories, setSelectedCategories, priceQuery, setPriceQuery, minPrice, maxPrice }) => {

    // ALL STATE ARE HERE
    const [isOpen, setIsOpen] = useState(false) // TOGGLE STATE FOR MOBILE VIEW FILTERING

    // HANDLER TOGGLE FILTER
    const toggleFilter = () => {
        setIsOpen(!isOpen)
    }

    return (

        <>
            <div className='relative sm:hidden '>
                <div className='flex justify-end'>
                    <p className='flex items-center gap-2'>
                        Filter
                        <HiOutlinePencilSquare
                            onClick={toggleFilter}
                        />
                    </p>
                </div>

                {
                    isOpen && (
                        <>
                            <motion.div
                                className='bg-white absolute top-8 rounded-xl shadow-2xl w-full z-30'
                                variants={open}
                                initial="initial"
                                animate="animate"
                            >
                                {/* show CAtegory which are selected user */}
                                <Filter selectedCategories={selectedCategories} />

                                <hr className='my-7 border border-gray opacity-20' />

                                {/* CAtegory Control */}
                                <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                                <hr className='my-7 border border-gray opacity-20' />

                                {/* Price Control */}
                                <PriceRange priceQuery={priceQuery} setPriceQuery={setPriceQuery} minPrice={minPrice} maxPrice={maxPrice} />
                            </motion.div>
                        </>
                    )
                }
            </div>


            <div className='shadow-md lg:col-span-2  bg-white rounded-xl hidden sm:block' >

                {/* Filtering */}
                <Filter selectedCategories={selectedCategories} />

                <hr className='my-7 border border-gray opacity-20' />

                {/* Category */}
                <Category selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <hr className='my-7 border border-gray opacity-20' />

                {/* Price Range */}
                <PriceRange priceQuery={priceQuery} setPriceQuery={setPriceQuery} minPrice={minPrice} maxPrice={maxPrice} />

                <hr className='my-7 border border-gray opacity-20' />

                <div className='p-7'>
                    <div className='discount rounded-2xl'>

                        <div className='p-5 text-white rounded-2xl'>
                            <h4 className='text-3xl font-bold'>GET 30% OFF</h4>
                            <p className='text-xl py-3'>Share your referral code and get discount</p>
                            <button className='bg-[#ffb800] w-full py-3 rounded-xl'>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Control.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setSelectedCategories: PropTypes.func.isRequired,
    priceQuery: PropTypes.string.isRequired,
    setPriceQuery: PropTypes.func.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired
};

export default Control;