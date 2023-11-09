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

const Control = () => {

    const [isOpen, setIsOpen] = useState(false)

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
                                <Filter />

                                <hr className='my-7 border border-gray opacity-20' />

                                <Category />

                                <hr className='my-7 border border-gray opacity-20' />

                                <PriceRange />
                            </motion.div>
                        </>
                    )
                }
            </div>


            <div className='shadow-md lg:col-span-2  bg-white rounded-xl hidden sm:block' >

                {/* Filtering */}
                <Filter />

                <hr className='my-7 border border-gray opacity-20' />

                {/* Category */}
                <Category />

                <hr className='my-7 border border-gray opacity-20' />

                {/* Price Range */}
                <PriceRange />

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

export default Control;